import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardAuthGuard } from './guard/dash-board-auth.guard';
import { LoginAuthGuard } from './guard/login-auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginAuthGuard]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [DashBoardAuthGuard] },
  { path: 'contacts', component: ContactsComponent, canActivate: [DashBoardAuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
