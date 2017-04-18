import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private content: AppComponent) {}

  getCap=this.content.docs;

  check(id){
    this.content.docs.nr=id-1;
  }
  ngOnInit() {
  }

}
