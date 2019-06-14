import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../classes/task'

@Pipe({
  name: 'assignee'
})
export class AssigneePipe implements PipeTransform {

  transform(tasks : Task[], filterText : string): any {
    if (filterText === ''){
      return tasks;
    }
    return tasks.filter(task => task.assignee.indexOf(filterText) > -1);
  }

}