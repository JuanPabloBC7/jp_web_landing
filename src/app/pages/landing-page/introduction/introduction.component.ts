import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    TranslateModule,
  ],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
