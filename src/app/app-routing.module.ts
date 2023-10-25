import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { AboutComponent } from "./components/about/about.component";
import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  { path: 'main', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
