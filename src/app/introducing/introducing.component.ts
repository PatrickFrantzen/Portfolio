import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  size: number;
  writingMode: string;
  transform: any;
  width: number;
}

@Component({
  selector: 'app-introducing',
  templateUrl: './introducing.component.html',
  styleUrls: ['./introducing.component.scss']
})
export class IntroducingComponent {
  tiles: Tile[] = [
    {text: 'I am', cols: 1, rows: 2, color: 'transparent', size: 64, writingMode: 'vertical-rl', transform: 'rotate(180deg)', width: 20},
    {text: 'Patrick Frantzen', cols: 2, rows: 1, color: 'transparent', size: 90, writingMode: 'unset', transform: 'unset', width: 80},
    {text: 'FRONTEND DEVELOPER', cols: 2, rows: 1, color: 'transparent', size: 58, writingMode: 'unset',transform: 'unset', width: 80},
  ]
}
//#141D2F