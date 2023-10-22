import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoListService} from "../../services/todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  constructor(
    public todoListService: TodoListService
  ) { }

  ngOnInit(): void {
  }

  listTitle:string = "TODO's :"

  protected readonly TodoListService = TodoListService;
}
