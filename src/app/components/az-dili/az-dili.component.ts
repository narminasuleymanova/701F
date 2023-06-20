import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";

@Component({
  selector: 'app-az-dili',
  templateUrl: './az-dili.component.html',
  styleUrls: ['./az-dili.component.scss']
})
export class AzDiliComponent implements OnInit {
  
  more: boolean = false;
  seeMore: boolean = true;

  constructor(private router: Router, private toast: HotToastService,) {}
  ngOnInit(): void {
  }
  
  moreInfo() {
    this.more=!this.more;
    this.seeMore=!this.seeMore;
  }

  next(){
    this.router.navigate(['home/sait'])
  }

  before() {
    this.toast.error('Siz lap əvvəldəsiz');
  }
}
