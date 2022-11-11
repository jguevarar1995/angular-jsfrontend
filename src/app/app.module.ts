import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StudentListComponent } from './student/student-list.component';
import { NewStudentComponent } from './student/new-student.component';
import { EditStudentComponent } from './student/edit-student.component';
import { DetailStudentComponent } from './student/detail-student.component';
import { LoginUserComponent } from './user/login-user.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    NewStudentComponent,
    EditStudentComponent,
    DetailStudentComponent,
    LoginUserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
