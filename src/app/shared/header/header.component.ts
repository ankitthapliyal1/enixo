import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
   
   }

  aboutus: boolean = false

  ngOnInit(): void {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        console.log(currentUrl);
        if(currentUrl === '/overview' ){
          this.aboutus = true
          console.log(this.aboutus)
        }
        else if(currentUrl === '/career' ){
          this.aboutus = true
        }
        else if(currentUrl === '/industries' ){
          this.aboutus = true
        }
        else if(currentUrl === '/client' ){
          this.aboutus = true
        }
        else if(currentUrl === '/testimonial' ){
          this.aboutus = true
        }
        else if(currentUrl === '/blogs'){
          this.aboutus = true
        }
        else{
          this.aboutus = false
        }
      }
    });
    
  }



  menuVariable: boolean = false;
  menu_icon_variable: boolean = false

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable
  }

  close() {
    this.menuVariable = false
    this.menu_icon_variable = false
  }

}
