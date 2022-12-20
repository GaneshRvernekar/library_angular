import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddStudComponent } from './add-stud/add-stud.component';
import { LoginComponent } from './login/login.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { DisplayStudComponent } from './display-stud/display-stud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AddStudComponent,
    LoginComponent,
    DisplayBooksComponent,
    DisplayStudComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
