import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CaseStudy } from '../../../shared/interface/case-study';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {
  @Input() compact = false;

  caseStudies: CaseStudy[] = [];

  constructor(private translateService: TranslateService) {
    this.translateService.stream('pages.caseStudies.items').subscribe((items: CaseStudy[]) => {
      this.caseStudies = items;
    });
  }
}
