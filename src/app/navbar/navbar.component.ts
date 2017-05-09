import { Component, OnInit, NgModule } from '@angular/core';
import {MdButtonModule} from '@angular/material';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@NgModule({
  imports: [MdButtonModule]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
