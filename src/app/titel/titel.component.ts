import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-titel',
  templateUrl: './titel.component.html',
  styleUrls: ['./titel.component.css']
})
export class TitelComponent implements OnInit {

  constructor(private content: AppComponent) {}

  getData=this.content.docs;





  ngOnInit() {
  }

}
