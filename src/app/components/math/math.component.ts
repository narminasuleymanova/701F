import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
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
    this.router.navigate(['home/math-natural-ededler-toplanma-cixilma-vurulma-bolunme'])
  }

  before(){
    this.router.navigate(['home/math-intro'])
  }

}
