import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingNavbarTopComponent } from '../../commons/navbar/landing-navbar-top/landing-navbar-top.component';
import { SimpleFooterComponent } from '../../commons/footer/simple-footer/simple-footer.component';
import { InformativeFooterComponent } from '../../commons/footer/informative-footer/informative-footer.component';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [
    RouterOutlet, 
    LandingNavbarTopComponent, 
    SimpleFooterComponent, 
    InformativeFooterComponent
  ],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss'
})
export class LandingLayoutComponent {

}
