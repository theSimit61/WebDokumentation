import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public docs={
    "nr":0,
    "dokumente":[
      {
        "titelID":1,
        "contentTitel":"Erstes Dokument",
        "content":"es ist zu heiß"
      },
      {
        "titelID":2,
        "contentTitel":"ullamco ame",
        "content":"wird schon besser"
      },
      {
        "titelID":3,
        "contentTitel":"ullam",
        "content":"ullamco amdysyd"
      },
      {
        "titelID":4,
        "contentTitel":"ullamco amet",
        "content":"ullamt"
      },
      {
        "titelID":5,
        "contentTitel":"ulgffs",
        "content":"ullamco derit"
      },
      {
        "titelID":6,
        "contentTitel":"6 tes dokument",
        "content":"quat reprehenderit"
      },
      {
        "titelID":7,
        "contentTitel":"die hölle",
        "content":"coole sache"
      }
    ]
  };
}

