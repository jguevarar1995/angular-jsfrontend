import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  emptyList = undefined;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.list().subscribe({
      next: data => {
        this.students = data;
        this.emptyList = undefined;
      },
      error: err => {
        this.emptyList = err.error.message;
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }

  delete(id?: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Una vez eliminado el estudiante, no hay forma de recuperar sus datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.delete(id ? id : 0).subscribe(res => this.loadStudents());
        Swal.fire(
          'Eliminado',
          'El estudiante ha sido eliminado con éxito',
          'success'
        )
      }
    })
  }


}
