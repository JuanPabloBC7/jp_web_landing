import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TimelineComponent } from './timeline/timeline.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    CommonModule,
    NgbTooltipModule,
    CarouselComponent,
    TimelineComponent,
    TranslateModule,
],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  showCarousel = false;

  constructor( ) { }

  ngOnInit(): void {
  }

}
