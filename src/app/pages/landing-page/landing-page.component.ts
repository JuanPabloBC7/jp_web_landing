import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
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
    AboutMeComponent,
    SkillsNToolsComponent,
    CareerEvolutionComponent,
    WorkComponent,
    CaseStudiesComponent,
    ContactMeComponent
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
