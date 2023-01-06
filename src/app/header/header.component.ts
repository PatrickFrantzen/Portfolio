import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{

aboutHeadClicked:boolean = false;
skillClicked:boolean = false;
portfolioClicked:boolean = false;

@ViewChild('aboutme') aboutme!: ElementRef;
constructor(public router: Router) {

}

ngOnInit(): void {
}

setUnderline(id:string) {
  if (id == 'about-head') {
    this.aboutHeadClicked = true;
    this.skillClicked = false;
    this.portfolioClicked = false;
  } else if (id == 'skill-head' ){
    this.aboutHeadClicked = false;
    this.skillClicked = true;
    this.portfolioClicked = false;
  } else {
    this.aboutHeadClicked = false;
    this.skillClicked = false;
    this.portfolioClicked = true;
  }
}

public scroll(id: any) {
  if (this.router.url == '/imprint') {
    window.location.href = 'http://localhost:4200/'
  } else {
    const area = document.getElementById(id);
    area?.scrollIntoView({
      behavior: 'smooth',
      block: "center",
      });
  }

}

}
