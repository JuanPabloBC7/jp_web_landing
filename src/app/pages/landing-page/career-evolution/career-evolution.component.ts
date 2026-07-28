import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CareerStage } from '../../../shared/interface/career-stage';

@Component({
  selector: 'app-career-evolution',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './career-evolution.component.html',
  styleUrl: './career-evolution.component.scss'
})
export class CareerEvolutionComponent {
  stages: CareerStage[] = [];

  constructor(private translateService: TranslateService) {
    this.translateService.stream('pages.careerEvolution.stages').subscribe((stages: CareerStage[]) => {
      this.stages = Array.isArray(stages) ? stages : [];
    });
  }
}
