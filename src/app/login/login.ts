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

















/*🎯 Purpose:

This file contains the logic for the Login page in your Angular project.
It connects your login form (HTML) to the UserService and Router to perform the login process and navigate to other pages.

🧱 Code Explanation (Line by Line)
1️⃣ Imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user';


Explanation:

Component → Used to define an Angular component.

Router → Helps navigate to other pages (like the profile page).

FormsModule → Enables two-way data binding with [(ngModel)].

CommonModule → Provides basic Angular directives like *ngIf and *ngFor.

UserService → A custom service that handles login and user data.

2️⃣ Component Decorator
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})


Explanation:

@Component tells Angular this is a component.

selector: 'app-login' → Name used to include this component in HTML.

standalone: true → This component works independently (doesn’t need a module).

imports → Modules required by this component.

templateUrl → Points to the HTML file (login.html).

styleUrls → Points to the CSS file (login.css).

✅ In short:

This defines how the Login component is built and what files it uses.

3️⃣ Class Definition and Variables
export class Login {
  email = '';
  password = '';


Explanation:

The class Login contains all logic for the login page.

email and password store what the user types in the login form.

✅ In short:

These variables hold user input values from the form.

4️⃣ Constructor
constructor(private userService: UserService, private router: Router) {}


Explanation:

Injects two services into the component:

UserService → Used to check user login credentials.

Router → Used to navigate to other pages after login.

✅ In short:

The constructor connects the login page with user data and navigation features.

5️⃣ Main Function
loginUser() {
  const success = this.userService.loginUser(this.email, this.password);
  if (success) {
    alert('Login Successful!');
    this.router.navigate(['/profile']);
  } else {
    alert('Invalid Credentials!');
  }
}


Explanation:

Runs when the user clicks the Login button.

Calls the loginUser() function from UserService and sends the entered email and password.

If credentials are correct → shows success message and redirects to the Profile page.

Otherwise → shows an error alert.

✅ In short:

Checks the user’s login details and moves to the next page if successful.

🧠 Viva Notes Summary
Keyword	Meaning / Role
@Component	Tells Angular that this is a component
email / password	Store form input values
constructor()	Injects UserService and Router
loginUser()	Function that handles login logic
UserService	Checks user’s login credentials
Router	Redirects user to Profile page
standalone: true	Component works independently without module
FormsModule	Allows two-way data binding ([(ngModel)]) */
