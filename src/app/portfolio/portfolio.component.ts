import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{

  public projectnames: string[] = ['Join', 'El Pollo Loco', 'Simple CRM', 'Pokedex'];
  public projectimages: string[] = ['join.png', 'elPolloLoco.png', 'simpleCRM.png', 'pokedex.png'];
  public methods: string[] = ['HTML | CSS | JavaScript', 'HTML | CSS | JavaScript', 'Angular | Firebase', 'HTML | CSS | JavaScript | API'];
  public descriptions: string[] = ['Task manager inspired by the Kanban System. Create and organize tasks using drag and drop function, assign users and categories',
'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins and salsa bottles to defeat a giant chicken', 
'A very simple Customer Relationship Management system working with CRUD functionality', 'Based on the PokéAPI, a simple library that provides and catalogues pokemon information',];
  public livetests: string[] = ['https://patrick-frantzen.developerakademie.net/JOIN-Kanban/index.html', 'https://patrick-frantzen.developerakademie.net/El_Pollo_Loco/index.html', 
  '#', 'https://patrick-frantzen.developerakademie.net/Pokedex/index.html'];
  public github: string[] = ['https://github.com/PatrickFrantzen/JOIN-Kanban', 'https://github.com/PatrickFrantzen/El-Pollo-Locco', '#', 'https://github.com/PatrickFrantzen/Pokedex',];
  

  constructor() {}

  ngOnInit(): void {
    
  }

  visitProject(url:string) {
    window.open(url, '_blank');
  }
}
