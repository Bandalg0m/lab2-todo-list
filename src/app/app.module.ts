import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NewRecordComponent } from './components/new-record/new-record.component';
import { ListRecordComponent } from "./components/list-record/list-record.component";
import { SearchComponent } from './components/search/search.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";
import {API_URL, EnvironmentService} from "./services/environment/environment.service";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    ListRecordComponent,
    TodoListComponent,
    NewRecordComponent,
    SearchComponent,
    AuthPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: EnvironmentService,
      useClass: EnvironmentService
    },
    {
      provide: API_URL,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
