import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.scss"],
})
export class VideoPlayerComponent implements OnInit {

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
    this.router.navigate(['home/math-natural-ededler-onluq-say-sistemi'])
  }

  before() {
    this.toast.error('Siz lap əvvəldəsiz');
  }
  
}
