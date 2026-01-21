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
  translateWork: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.work.experiences').subscribe(res => {
      this.translateWork = res;
    });
  }
}
