import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../classes/task'
import { TASKS } from '../../classes/tasks-mock';
import { BoardService } from '../../services/board.service'


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input()
  public title: string;
  @Input()
  public id: number;

  public taskInstance: Task;
  public tasks : Task[];
  public filterText : string;

  constructor(private boardService : BoardService) { //only pass objects
    
  }

  ngOnInit() {  //do init stuff
  this.boardService.getAssigneeFilter().subscribe(val => this.filterText = val);
    this.boardService.getTasksListSubject().subscribe((result) => {
      this.tasks = result.filter(taskInstance => taskInstance.columnId == this.id)
    });



  }

}