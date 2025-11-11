import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  registerUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  loginUser(email: string, password: string): boolean {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      return true;
    }
    return false;
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  }

  logoutUser() {
    localStorage.removeItem('loggedInUser');
  }
}
