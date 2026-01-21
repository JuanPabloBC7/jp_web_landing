import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  translateWork: any = [];

  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.work.experiences').subscribe(res => {
      this.translateWork = res;
    });
  }
}
