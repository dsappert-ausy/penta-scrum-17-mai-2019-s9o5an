import { Component, OnInit } from '@angular/core';
import { Column } from '../../classes/column';
import { COLUMNS } from '../../classes/columns-mock';
import { BoardService } from '../../services/board.service'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public columns : Column[];
  public assigneeFilterSubject$ : BehaviorSubject<string>;

  constructor(private boardService : BoardService) { }

  ngOnInit() {
    this.assigneeFilterSubject$ = this.boardService.getAssigneeFilter();
    this.boardService.getColumnListSubject().subscribe(result => {
      console.log(result);
      this.columns = result;
    });
    this.boardService.fetchColumnList();
    this.boardService.fetchTasksList();
  }

}