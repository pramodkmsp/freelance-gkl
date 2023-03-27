import { TestBed } from '@angular/core/testing';

import { DashBoardAuthGuard } from './dash-board-auth.guard';

describe('DashBoardAuthGuard', () => {
  let guard: DashBoardAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashBoardAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
