import { DisplayBooksComponent } from './display-books/display-books.component';
import { DisplayStudComponent } from './display-stud/display-stud.component';
import { AddStudComponent } from './add-stud/add-stud.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'addStudent',component:AddStudComponent
  },
  {
    path:'displayStudent',component:DisplayStudComponent
  },
  {
    path:'displayBooks',component:DisplayBooksComponent
  },
  {
    path:'addBooks',component:AddBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
