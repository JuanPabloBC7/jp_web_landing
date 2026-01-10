import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  translateWork: any = {};
  works: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.work.experiences').subscribe(res => {
      this.translateWork = res;
      this.works = [];

      for (const key in this.translateWork) {
        this.works.push({
          title: this.translateWork[key].title, 
          subtitleOne: this.translateWork[key].subtitleOne, 
          subtitleTwo: this.translateWork[key].subtitleTwo, 
          duration: this.translateWork[key].duration, 
          description: this.translateWork[key].description, 
          skills: this.translateWork[key].skills 
        });
      }
    });
  }
}
