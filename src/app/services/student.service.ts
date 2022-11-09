import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentURL = environment.studentURL;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.studentURL}`);
  }

  public detail(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.studentURL}${id}`);
  }

  public save(student: Student): Observable<any> {
    return this.httpClient.post<any>(`${this.studentURL}`, student);
  }

  public update(id: number, student: Student): Observable<any> {
    return this.httpClient.put<any>(`${this.studentURL}${id}`, student);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.studentURL}${id}`);
  }
}
