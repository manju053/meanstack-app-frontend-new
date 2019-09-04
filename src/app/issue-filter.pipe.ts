import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'issueFilter'
})
export class IssueFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return [];
    if(!args || args === 'All') return value;

    return value.filter(item => item.status === args);
  }

}
