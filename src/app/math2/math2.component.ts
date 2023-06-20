import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from "@ngneat/hot-toast";

@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.scss']
})
export class Math2Component implements OnInit {

  more: boolean = false;
  seeMore: boolean = true;

  constructor(private router: Router, private toast: HotToastService) {}
  ngOnInit(): void {
  }
  
  moreInfo() {
    this.more=!this.more;
    this.seeMore=!this.seeMore;
  }

  next(){
    this.toast.error('Hal-hazırda Siz saytın beta versiyasındandan istifadə edirsiniz');
  }

  before(){
    this.router.navigate(['home/math-natural-ededler-onluq-say-sistemi'])
  }

}
