import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OverviewComponent } from './pages/aboutus/overview/overview.component';
import { CareersComponent } from './pages/aboutus/careers/careers.component';
import { IndustriesComponent } from './pages/aboutus/industries/industries.component';
import { BlogsComponent } from './pages/aboutus/blogs/blogs.component';
import { TestimonialComponent } from './pages/aboutus/testimonial/testimonial.component';
import { ClienteleComponent } from './pages/aboutus/clientele/clientele.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'overview', component:OverviewComponent},
  {path:'career', component:CareersComponent},
  {path:'industries', component:IndustriesComponent},
  {path:'client', component:ClienteleComponent},
  {path:'testimonial', component:TestimonialComponent},
  {path:'blogs', component:BlogsComponent},

  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
