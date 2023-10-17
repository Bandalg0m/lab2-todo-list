import { Injectable } from '@angular/core';
import {ITodoListItem, Status} from "../../entities/types";
import {TodoListRecord} from "../../entities/todoRecord";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  listItemOne = new TodoListRecord(1, 'Сделай то', 'done')
  listItemTwo = new TodoListRecord(2, 'Сделай cё', 'normal')
  listItemThree = new TodoListRecord(3, 'Сделай сразу всё', 'important')
  todoList: Array<ITodoListItem> = [this.listItemOne, this.listItemTwo, this.listItemThree]
  constructor() { }

  add(name: string): void{
    const id: number = this.todoList.length + 1;
    const newRecord: ITodoListItem = new TodoListRecord(id, name, 'normal');
    this.todoList = [...this.todoList, newRecord];
  }

  delete(id: number): void{
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  handleStatus(id:number, newStatus: keyof typeof Status): void{
    this.todoList = this.todoList.map(item => item.id === id ? {...item, status: newStatus} : item);
  }

}
