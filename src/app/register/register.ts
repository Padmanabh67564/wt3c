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
























/*🎯 Purpose:

This file contains the logic for the registration page in your Angular app.
It takes the user’s name, email, and password from the form, saves them using the UserService, shows a success message, and then navigates to the Login page.

🧱 Code Explanation (Line by Line)
1️⃣ Imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user';


Explanation:

Component → Defines an Angular component.

Router → Used for navigation between pages (after registration).

FormsModule → Allows two-way data binding using [(ngModel)].

CommonModule → Gives access to Angular directives (ngIf, ngFor, etc.).

UserService → Custom service used to store and manage user data.

✅ In short:

These imports bring in tools needed for form handling, navigation, and user data storage.

2️⃣ Component Decorator
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})


Explanation:

@Component → Marks this class as an Angular component.

selector: 'app-register' → Used as a custom HTML tag to display this component.

standalone: true → Component works independently (no module file needed).

imports: [FormsModule, CommonModule] → Enables form and Angular features.

templateUrl → Points to the HTML file (register.html).

styleUrls → Points to the CSS file (register.css).

✅ In short:

This connects the component with its HTML and CSS files and required modules.

3️⃣ Class and User Object
export class Register {
  user = { name: '', email: '', password: '' };


Explanation:

Defines the Register class that contains the logic for registration.

The user object stores the input values (name, email, password) typed by the user in the form.

✅ In short:

Stores all registration form data inside the user object.

4️⃣ Constructor
constructor(private userService: UserService, private router: Router) {}


Explanation:

Injects two services:

UserService → To save the new user’s data.

Router → To move to the login page after successful registration.

✅ In short:

Connects the registration logic with user data storage and navigation.

5️⃣ registerUser() Function
registerUser() {
  this.userService.registerUser(this.user);
  alert('Registration Successful!');
  this.router.navigate(['/login']);
}


Explanation:

This function runs when the user clicks the Register button.

It calls registerUser() from UserService and passes the user’s data.

Shows an alert to confirm successful registration.

Redirects to the Login page using the router.

✅ In short:

Saves the user’s details, shows a success message, and navigates to the login page.

🧠 Viva Notes Summary
Concept	Explanation
@Component	Declares this as an Angular component
user	Stores input values (name, email, password)
constructor()	Injects UserService & Router
registerUser()	Function to handle form submission
UserService	Handles saving user data
Router	Redirects to the login page
FormsModule	Enables two-way data binding
standalone: true	Makes the component independent of modules
💬 Simple Viva Answer:

“This is my Register component TypeScript file.
It handles the logic of the registration form.
When a user enters their name, email, and password, the data is stored in the user object.
The registerUser() function sends this data to the UserService, shows a success alert, and redirects the user to the login page.
I used FormsModule for two-way data binding and Router for page navigation.” */




