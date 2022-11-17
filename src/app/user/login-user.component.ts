import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user: User = <User>{};

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/']);
  }

  performLogin(): void {
    this.userService.login(this.user).subscribe({
      next: data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/students']);
      },
      error: err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      },
      complete: () => {
        console.log('Request complete');
      }

    });
  }

}
