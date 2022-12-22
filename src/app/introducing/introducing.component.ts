import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  size: number;
}

@Component({
  selector: 'app-introducing',
  templateUrl: './introducing.component.html',
  styleUrls: ['./introducing.component.scss']
})
export class IntroducingComponent {
  tiles: Tile[] = [
    {text: 'I am', cols: 1, rows: 2, color: 'lightblue', size: 60},
    {text: 'Patrick Frantzen', cols: 2, rows: 1, color: 'lightgreen', size: 60},
    {text: 'FRONTEND DEVELOPER', cols: 2, rows: 1, color: 'lightpink', size: 60},
  ]
}
//#141D2F