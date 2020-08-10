import { Component } from '@angular/core';

@Component({
  selector: 'ptt-admin',
  template: `
  <h2>Admin</h2>
  <nav>
    <a [routerLink]="['/admin', 'users']">Admin User</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AdminPageComponent {

}