import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  buraxilish: boolean = false;
  firstGroup: boolean = true;
  secondGroup: boolean = false;
  thirdGroup: boolean = false;
  fourthGroup: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
