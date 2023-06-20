import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-kimya',
  templateUrl: './kimya.component.html',
  styleUrls: ['./kimya.component.scss']
})
export class KimyaComponent implements OnInit {

  showWarning: boolean = false;

  isQuizStarted: boolean = false;
  isQuizEnded: boolean = false;
  questionsList: any[]= [];
  currentQuestionNo: number = 0;

  remainingTime:number = 10;

  timer = interval(1000);
  subscription: Subscription [] = [];
  correctAnswerCount: number = 0;


  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void { 
    this.loadQuestions();
  }
  loadQuestions() {
    this.http.get("assets/questions.json").subscribe((res:any)=>{
      debugger;
      this.questionsList = res;
    })
  }
  nextQuestion() {
    if(this.currentQuestionNo < this.questionsList.length-1) {
      this.currentQuestionNo ++;
      this.remainingTime = 10;
    } else {
      this.subscription.forEach(element => {
        element.unsubscribe();
      });
    } 
  }
  finish() {
    this.isQuizEnded = true;
    this.isQuizStarted = false;
    this.currentQuestionNo = 0;
  }

  start() {
    this.showWarning = false;
    this.isQuizEnded = false;
    this.isQuizStarted = false;
    this.remainingTime = 10;
    this.currentQuestionNo = 0;
  }

  showWarningPopup() {
    this.showWarning = true;
  }

  selectOption(option: any) {
    if(option.isCorrect) {
      this.correctAnswerCount ++;
    }
    option.isSelected = true;
  }
  isOptionSelected(options: any) {
    const selectionCount = options.filter((m:any)=>m.isSelected == true).length;
    if(selectionCount == 0) {
      return false;
    } else {
      return true;
    }
  }
  startQuiz() {
    this.showWarning = false;
    this.isQuizStarted = true;
   this.subscription.push(this.timer.subscribe(res=> {
      console.log(res);
      if(this.remainingTime != 0) {
        this.remainingTime --;
      } 
      if(this.remainingTime == 0) {
        this.nextQuestion();
        this.remainingTime = 10;
      } 
    })
   )
  }

  resetComponent() {
    this.showWarning = false;
    this.isQuizStarted = false;
    this.isQuizEnded = false;
    //this.questionsList = [];
    this.currentQuestionNo = 0;
    this.remainingTime = 10;
    this.correctAnswerCount = 0;
    this.subscription.forEach((element) => {
      element.unsubscribe();
    });
    this.loadQuestions();
  }

  retest() {
    this.resetComponent();
    this.startQuiz();
  }
}
