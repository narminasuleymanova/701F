import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.scss"],
})
export class VideoPlayerComponent implements OnInit {

  liked: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  like() {
    this.liked=!this.liked;
  }
}
