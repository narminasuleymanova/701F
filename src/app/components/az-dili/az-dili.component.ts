import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-az-dili',
  templateUrl: './az-dili.component.html',
  styleUrls: ['./az-dili.component.scss']
})
export class AzDiliComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/j4e4cbc4Kyw");
  }

  ngOnInit(): void {
  }

}
