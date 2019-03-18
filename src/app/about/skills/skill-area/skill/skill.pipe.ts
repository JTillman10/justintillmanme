import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skill'
})
export class SkillPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    value = parseInt(value, 10);
    if (value > 80) {
      return 'Strong';
    } else if (value > 40) {
      return 'Proficient';
    } else {
      return 'Novice';
    }
  }
}
