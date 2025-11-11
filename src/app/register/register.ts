import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  user = { name: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    this.userService.registerUser(this.user);
    alert('Registration Successful!');
    this.router.navigate(['/login']);
  }
}
