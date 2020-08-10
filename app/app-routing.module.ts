import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './frontpages/about.component';
import { FrontPageComponent } from './frontpages/frontpage.component';
import { AdminUserComponent } from './admin/user.component';
import { AdminPageComponent } from './admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      {
        path: 'users',
        component: AdminUserComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [FrontPageComponent, AboutComponent, AdminUserComponent, AdminPageComponent],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
