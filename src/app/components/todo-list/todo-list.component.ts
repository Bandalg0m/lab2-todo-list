import {ChangeDetectionStrategy, ChangeDetectorRef, Component,  OnInit} from '@angular/core';
import {TodoListService} from "../../services/todo-list.service";
import {map} from "rxjs";
import {TodoListRecord} from "../../../entities/todoRecord";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  constructor(
    public todoListService: TodoListService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.todoListService.getRecords()
        .pipe(
          map(data => data.map(item => new TodoListRecord(item.id, item.name, item.status)))
        )
        .subscribe(value => {
          this.todoListService.sourceTodoList = value;
          this.todoListService.todoList = [...this.todoListService.sourceTodoList];
          this.changeDetection.detectChanges()
    })
  }

    listTitle:string = "TODO's :"

  protected readonly TodoListService = TodoListService;
}
