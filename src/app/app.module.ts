import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NewRecordComponent } from './components/new-record/new-record.component';
import { ListRecordComponent } from "./components/list-record/list-record.component";
import { SearchComponent } from './components/search/search.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecordComponent,
    TodoListComponent,
    NewRecordComponent,
    SearchComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
