import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samit-first-part',
  templateUrl: './samit-first-part.component.html',
  styleUrls: ['./samit-first-part.component.scss']
})
export class SamitFirstPartComponent implements OnInit {

  more: boolean = false;
  seeMore: boolean = true;

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  
  moreInfo() {
    this.more=!this.more;
    this.seeMore=!this.seeMore;
  }

  next(){
    this.router.navigate(['home/samit-2ci-hisse'])
  }

  before(){
    this.router.navigate(['home/sait'])
  }
}
