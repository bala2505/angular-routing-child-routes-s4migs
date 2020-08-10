import { Component } from '@angular/core';

@Component({
  selector: 'ptt-front-page',
  template: `
  <h2>Frontpage</h2>
  <nav>
    <a routerLink="/about">About</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class FrontPageComponent {

}