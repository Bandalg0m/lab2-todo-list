import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListRecordComponent } from './list-record/list-record.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewRecordComponent } from './new-record/new-record.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecordComponent,
    TodoListComponent,
    NewRecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
