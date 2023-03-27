import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!args) {
      return value;
    };
    if(value) {
      return value.filter(c => {
        let isPresent = false;
        let keys = Object.keys(c);
        keys.forEach(key => {
          if(typeof c[key] !== 'boolean' && c[key].toLowerCase().includes(args.toLowerCase())) {
            isPresent = true;
          }
        });
        if(isPresent) {
          return c;
        }
      });
    }
  }
}
