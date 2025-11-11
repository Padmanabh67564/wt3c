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






















*/🎯 Purpose:

This file handles the logic for the Profile page in your Angular app.
It shows the logged-in user’s details, checks if the user is logged in, and allows the user to log out.

🧱 Code Explanation (Line by Line)
1️⃣ Imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../user';


Explanation:

Component → Used to define an Angular component.

OnInit → Lifecycle hook that runs code when the component first loads.

Router → Used to navigate between pages.

CommonModule → Provides basic Angular directives (ngIf, ngFor, etc.).

UserService → Custom service that manages user login, logout, and user data.

✅ In short:

These imports bring in everything needed for displaying and managing the user profile.

2️⃣ Component Decorator
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})


Explanation:

Declares this as a standalone Profile component.

selector: 'app-profile' → The HTML tag used to display this component.

imports: [CommonModule] → Allows basic Angular features.

templateUrl and styleUrls → Link to the HTML and CSS files for design.

✅ In short:

This tells Angular what files and modules are used for the Profile page.

3️⃣ Class Definition and Variables
export class Profile implements OnInit {
  user: any = {};


Explanation:

Profile → The main class that controls the profile logic.

implements OnInit → Means it uses Angular’s ngOnInit() function.

user → Object to store currently logged-in user’s details.

✅ In short:

This class runs when the profile page loads and stores the user’s data.

4️⃣ Constructor
constructor(private userService: UserService, private router: Router) {}


Explanation:

Injects (private) two services:

UserService → Used to get user details and manage logout.

Router → Used to navigate between pages.

✅ In short:

The constructor connects this component with user data and page navigation.

5️⃣ ngOnInit() Function
ngOnInit() {
  this.user = this.userService.getLoggedInUser();
  if (!this.user.email) {
    alert('Please login first!');
    this.router.navigate(['/login']);
  }
}


Explanation:

ngOnInit() runs automatically when the page loads.

It calls getLoggedInUser() from the UserService to get the currently logged-in user.

If no user is found (i.e., not logged in), it shows an alert and redirects to the login page.

✅ In short:

When the profile page opens, it checks if the user is logged in. If not, it sends them back to the login page.

6️⃣ Logout Function
logout() {
  this.userService.logoutUser();
  this.router.navigate(['/login']);
}


Explanation:

Calls logoutUser() from the UserService to remove the logged-in user data.

Then redirects the user to the Login page.

✅ In short:

This function logs the user out and sends them to the login page.

🧠 Viva Notes Summary
Keyword / Function	Explanation
@Component	Defines the Profile component
user	Stores logged-in user’s data
constructor()	Injects UserService and Router
ngOnInit()	Runs when page loads; checks if user is logged in
getLoggedInUser()	Fetches logged-in user data from service
logout()	Logs user out and redirects to login page
Router	Used for page navigation
standalone: true	Component works independently, no need for module
💬 Simple Viva Answer:

“This is the Profile component file.
It shows the logged-in user’s details and checks if a user is logged in when the page loads.
If no user is found, it redirects to the login page.
It also includes a logout function that clears the user’s data and navigates back to the login page.
I used a UserService for getting and removing user data, and Router for navigation.” */
