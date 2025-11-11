import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
];















/*🎯 Purpose:

This file defines all the navigation paths (routes) in your Angular project.
It tells the app which page (component) should open when the user visits a specific URL — like /login, /register, or /profile.

🧱 Code Explanation (Line by Line)
1️⃣ Imports
import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';


Explanation:

Routes → A special Angular type that defines the structure of your routes.

Register, Login, and Profile → Imported components that represent different pages.

✅ In short:

These imports bring in the components that will be used in the routing setup.

2️⃣ Routes Array
export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
];


Explanation (line by line):

🟢 { path: '', redirectTo: 'register', pathMatch: 'full' }

When the user opens the app (empty path /), it automatically redirects to the Register page.

pathMatch: 'full' means the entire URL must match.

✅ In short:

Default route — when the app starts, it opens the Register page.

🟢 { path: 'register', component: Register }

When the user goes to /register, the Register component is displayed.

✅ In short:

Shows the Register page.

🟢 { path: 'login', component: Login }

When the user goes to /login, the Login component is displayed.

✅ In short:

Shows the Login page.

🟢 { path: 'profile', component: Profile }

When the user goes to /profile, the Profile component is displayed.

✅ In short:

Shows the Profile page.

🧠 Viva Notes Summary
Concept / Term	Explanation
Routes	Defines navigation paths in the Angular app
path	URL segment (like /login)
component	Page (component) to load for that path
redirectTo	Redirects from one path to another
pathMatch: 'full'	Ensures exact path match before redirect
register/login/profile	Components for each page
💬 Simple Viva Answer:

“This file defines all the routes for my Angular project.
It tells the app which component to load for each URL.
For example, /register opens the Register page, /login opens the Login page, and /profile opens the Profile page.
The default path redirects to the Register page when the app starts.”*/
