import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sait',
  templateUrl: './sait.component.html',
  styleUrls: ['./sait.component.scss']
})
export class SaitComponent implements OnInit {

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
    this.router.navigate(['home/samit-1ci-hisse'])
  }

  before(){
    this.router.navigate(['home/az-intro'])
  }
}

