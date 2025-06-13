import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    AboutUsComponent,
    ContactUsComponent
],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
