import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MdButtonModule, MdCheckboxModule, } from '@angular/material';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';

const appRoutes: Routes = [
  { path: 'ulink1', component: FirstComponent },
  { path: 'ulink2', component: SecondComponent },
  {
    path: 'ulink3',
    component: FirstComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/ulink1',
    pathMatch: 'full'
  },
  { path: '**', component: SecondComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SecondComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MdButtonModule, MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
