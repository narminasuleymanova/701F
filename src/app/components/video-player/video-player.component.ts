import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.scss"],
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('input') input?:ElementRef;

  more: boolean = false;
  seeMore: boolean = true;

  comments: string = '';

  user$ = this.authenticationService.currentUser$
  
  

  constructor(private router: Router, private toast: HotToastService, private authenticationService: AuthenticationService) {}
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
  
  onSubmit() {
    this.comments = this.input?.nativeElement.value;
    this.input!.nativeElement.value = '';
  }


  
}
