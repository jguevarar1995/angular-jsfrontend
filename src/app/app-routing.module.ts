import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailStudentComponent } from './student/detail-student.component';
import { EditStudentComponent } from './student/edit-student.component';
import { NewStudentComponent } from './student/new-student.component';
import { StudentListComponent } from './student/student-list.component';
import { LoginUserComponent } from './user/login-user.component';

const routes: Routes = [
  {path: '', component: LoginUserComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'detail/:id', component: DetailStudentComponent},
  {path: 'new', component: NewStudentComponent},
  {path: 'edit/:id', component: EditStudentComponent},
  {path: 'login', component: LoginUserComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
