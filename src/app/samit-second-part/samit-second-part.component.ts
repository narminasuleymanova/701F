import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-samit-second-part',
  templateUrl: './samit-second-part.component.html',
  styleUrls: ['./samit-second-part.component.scss']
})
export class SamitSecondPartComponent implements OnInit {

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
    this.router.navigate(['home/samit-1ci-hisse'])
  }

}
