import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnInit {
  user: any = {};

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getLoggedInUser();
    if (!this.user.email) {
      alert('Please login first!');
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.userService.logoutUser();
    this.router.navigate(['/login']);
  }
}
