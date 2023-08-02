import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  constructor() { }

  industries= [
    {'name':'GAMING & ENTERTAINMENT', 'img':'gaming.png'},
    {'name':'BANKING', 'img':'bank.png'},
    {'name':'EDUCATION', 'img':'education.png'},
    {'name':'HEALTHCARE', 'img':'health.png'},
    {'name':'HEAVY INDUSTRIES', 'img':'heavy.png'},
    {'name':'PHARMACEUTICAL', 'img':'pharma.png'},
    {'name':'REAL ESTATE', 'img':'realestate.png'},
    {'name':'AUTOMOTIVE', 'img':'automotive.png'},
  ]

  ngOnInit(): void {
  }

}
