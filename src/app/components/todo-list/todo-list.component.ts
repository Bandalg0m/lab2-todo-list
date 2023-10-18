import { Component, OnInit } from '@angular/core';
import { TodoListService } from "../../services/todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
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
