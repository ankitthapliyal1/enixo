import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  constructor() { }

  positions= [
    {'title':'Content Writer','location':'Bangalore'},
    {'title':'Digital Marketing Specialist','location':'Bangalore'},
    {'title':'Executive Assistant','location':'Bangalore'},
    {'title':'Manager- Digital Marketing Strategist','location':'Bangalore'},
    {'title':'Senior Unity Developer','location':'Bangalore'},
    {'title':'Senior Web Designer','location':'Bangalore'},
    {'title':'Senior 2D Artist','location':'Bangalore'},
    {'title':'Web Game Developer','location':'Bangalore'},
  ]

  ngOnInit(): void {
  }

}
