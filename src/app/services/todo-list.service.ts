import { Injectable } from '@angular/core';
import {INewRecord, ISearchQuery, ITodoListItem, Status} from "../../entities/types";
import {TodoListRecord} from "../../entities/todoRecord";
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  sourceTodoList: Array<ITodoListItem> = [];
  todoList: Array<ITodoListItem> = []
  filers: ISearchQuery = {
    name: '',
    status: 'all'
  }
  constructor(private http: HttpClient) { }
  getRecords() {
    return this.http.get<ITodoListItem[]>('assets/todo-list.json')
    .pipe(map(data => data.map(item => new TodoListRecord(item.id, item.name, item.status))))}

  add(value: INewRecord): void{
    const id: number = this.sourceTodoList.length + 1;
    const status: keyof typeof Status = value.isImportant ? 'important' : 'normal'
    const newRecord: ITodoListItem = new TodoListRecord(id, value.name, status);
    this.sourceTodoList = [...this.sourceTodoList, newRecord];
    this.todoList = [...this.sourceTodoList]
    this.filter(this.filers)
  }

  delete(id: number): void {
    this.sourceTodoList = this.sourceTodoList.filter(item => item.id !== id);
    this.todoList = [...this.sourceTodoList]
    this.filter(this.filers)
  }

  filter(value: ISearchQuery): void {
    this.todoList = this.sourceTodoList.filter(item => value.status === "all" ? true : item.status === value.status)
    this.todoList = this.todoList.filter(item => value.name === '' ? true : item.name === value.name)
    this.filers = value
  }

  changeStatus(value: keyof typeof Status, id:number):void {
    this.sourceTodoList = this.sourceTodoList.map(item => item.id === id ? {...item, status: value} : item)
  }

}
