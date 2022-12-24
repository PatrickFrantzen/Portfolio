import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  size: number;
  writingMode: string;
  transform: any;
}

@Component({
  selector: 'app-introducing',
  templateUrl: './introducing.component.html',
  styleUrls: ['./introducing.component.scss']
})
export class IntroducingComponent {
  tiles: Tile[] = [
    {text: 'I am', cols: 1, rows: 2, color: 'transparent', size: 60, writingMode: 'vertical-rl', transform: 'rotate(180deg)'},
    {text: 'Patrick Frantzen', cols: 2, rows: 1, color: 'transparent', size: 60, writingMode: 'unset', transform: 'unset'},
    {text: 'FRONTEND DEVELOPER', cols: 2, rows: 1, color: 'transparent', size: 60, writingMode: 'unset',transform: 'unset'},
  ]
}
//#141D2F