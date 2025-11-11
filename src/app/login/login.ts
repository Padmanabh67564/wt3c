import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  loginUser() {
    const success = this.userService.loginUser(this.email, this.password);
    if (success) {
      alert('Login Successful!');
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid Credentials!');
    }
  }
}
