import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsNToolsComponent } from './skills-n-tools/skills-n-tools.component';
import { WorkComponent } from './work/work.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { CareerEvolutionComponent } from './career-evolution/career-evolution.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TrustSignalsComponent } from './trust-signals/trust-signals.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    IntroductionComponent,
    TrustSignalsComponent,
    AboutUsComponent,
    SkillsNToolsComponent,
    CareerEvolutionComponent,
    WorkComponent,
    CaseStudiesComponent,
    ContactUsComponent
],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  focusIn = false;

  constructor() { }

  ngOnInit(): void {
  }

}
