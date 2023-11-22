import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
employees =[
  {name: "rishitha", age: 25},
  {name: "sanaka", age: 23},
  {name: "rishi", age: 27},
  {name: "rishith", age: 28},
  {name: "ram", age: 30},
  {name: "sita", age: 25}
]
}
