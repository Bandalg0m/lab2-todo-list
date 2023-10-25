import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { AboutComponent } from "./components/about/about.component";
import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import {AuthGuard} from "./guards/auth.guard";
import {MeetupsComponent} from "./components/meetups/meetups.component";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'auth', component: AuthPageComponent },
  { path: 'main', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'meetups', component: MeetupsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
