import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { ContactComponent } from './pages/contact/contact.component';
import { OverviewComponent } from './pages/aboutus/overview/overview.component';
import { CareersComponent } from './pages/aboutus/careers/careers.component';
import { IndustriesComponent } from './pages/aboutus/industries/industries.component';
import { ClienteleComponent } from './pages/aboutus/clientele/clientele.component';
import { TestimonialComponent } from './pages/aboutus/testimonial/testimonial.component';
import { BlogsComponent } from './pages/aboutus/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    OverviewComponent,
    CareersComponent,
    IndustriesComponent,
    ClienteleComponent,
    TestimonialComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
