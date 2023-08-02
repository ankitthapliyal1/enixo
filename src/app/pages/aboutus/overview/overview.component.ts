import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  team=[
   {'name':'Ray, Violet', 'position':"CEO", 'img':'dp2.png'},
   {'name':'Stephenson, Mollie', 'position':"CEO", 'img':'dp.png'},
   {'name':'LOUDLEADER SINGH', 'position':"Jane Cooper", 'img':'dp3.png'},
   {'name':'Ray, Violet', 'position':"CEO", 'img':'dp.png'},
   {'name':'Stephenson, Mollie', 'position':"CEO", 'img':'dp4.png'},
   {'name':'Dianne Russell', 'position':"CEO", 'img':'dp5.png'},
   {'name':'LOUDLEADER SINGH', 'position':"CEO", 'img':'dp3.png'},
   {'name':'Ralph Edwards', 'position':"CEO", 'img':'dp5.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
