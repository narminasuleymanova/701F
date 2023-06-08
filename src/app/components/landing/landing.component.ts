import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  user$ = this.authenticationService.currentUser$

  buraxilish: boolean = true;
  firstGroup: boolean = false;
  secondGroup: boolean = false;
  thirdGroup: boolean = false;
  fourthGroup: boolean = false;

  illik:boolean = true;
  ayliq:boolean = false;

  answer1: boolean = false; 
  answer2: boolean = false; 
  answer3: boolean = false; 
  answer4: boolean = false; 

  buttonColor1: string = '#E4005C';
  buttonColor2: string = 'gray';

  buttonGroup1: string = '#E4005C';
  buttonGroup2: string = '#EAEAEA';
  buttonGroup3: string = '#EAEAEA';
  buttonGroup4: string = '#EAEAEA';
  buttonGroup5: string = '#EAEAEA';



  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {}

  clickBuraxilish() {
    this.buraxilish = true;
    this.firstGroup = false;
    this.secondGroup = false;
    this.thirdGroup = false;
    this.fourthGroup = false;
    this.buttonGroup1 = "#E4005C";
    this.buttonGroup2 = '#EAEAEA';
    this.buttonGroup3 = '#EAEAEA';
    this.buttonGroup4 = '#EAEAEA';
    this.buttonGroup5 = '#EAEAEA';
  }

  clickFirstGroup() {
    this.buraxilish = false;
    this.firstGroup = true;
    this.secondGroup = false;
    this.thirdGroup = false;
    this.fourthGroup = false;
    this.buttonGroup1 = '#EAEAEA';
    this.buttonGroup2 = "#E4005C";
    this.buttonGroup3 = '#EAEAEA';
    this.buttonGroup4 = '#EAEAEA';
    this.buttonGroup5 = '#EAEAEA';
  }

  clickSecondGroup() {
    this.buraxilish = false;
    this.firstGroup = false;
    this.secondGroup = true;
    this.thirdGroup = false;
    this.fourthGroup = false;
    this.buttonGroup1 = '#EAEAEA';
    this.buttonGroup2 = '#EAEAEA';
    this.buttonGroup3 = "#E4005C";
    this.buttonGroup4 = '#EAEAEA';
    this.buttonGroup5 = '#EAEAEA';
  }

  clickThirdGroup() {
    this.buraxilish = false;
    this.firstGroup = false;
    this.secondGroup = false;
    this.thirdGroup = true;
    this.fourthGroup = false;
    this.buttonGroup1 = '#EAEAEA';
    this.buttonGroup2 = '#EAEAEA';
    this.buttonGroup3 = '#EAEAEA';
    this.buttonGroup4 = "#E4005C";
    this.buttonGroup5 = '#EAEAEA';
  }

  clickFourthGroup() {
    this.buraxilish = false;
    this.firstGroup = false;
    this.secondGroup = false;
    this.thirdGroup = false;
    this.fourthGroup = true;
    this.buttonGroup1 = '#EAEAEA';
    this.buttonGroup2 = '#EAEAEA';
    this.buttonGroup3 = '#EAEAEA';
    this.buttonGroup4 = '#EAEAEA';
    this.buttonGroup5 = "#E4005C"
  }

  onClick() {
    if(!this.illik){
      this.illik = true;
      this.ayliq =false;
      this.buttonColor1 = "#E4005C";
      this.buttonColor2 = "gray";
    }
  }
  
  onClick2() {
    if(!this.ayliq){
      this.ayliq = true;
      this.illik =false;
      this.buttonColor2 = "#E4005C";
      this.buttonColor1 = 'gray';
    }
  }

  clickAnswer1() {
    this.answer1 = !this.answer1;
  }
  clickAnswer2() {
    this.answer2 = !this.answer2;
  }
  clickAnswer3() {
    this.answer3 = !this.answer3;
  }
  clickAnswer4() {
    this.answer4 = !this.answer4;
  }

}
