import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  blogs=[
    {'name':'', 'img':'blog.png'},
    {'name':'', 'img':'blog2.png'},
    {'name':'', 'img':'blog3.png'},
    {'name':'', 'img':'blog4.png'},
    {'name':'', 'img':'blog5.png'},
    {'name':'', 'img':'blog.png'},
    {'name':'', 'img':'blog3.png'},
    {'name':'', 'img':'blog2.png'},
  ]

  ngOnInit(): void {
  }

}
