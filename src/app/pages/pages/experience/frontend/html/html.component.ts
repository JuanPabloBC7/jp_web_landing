import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgbNavModule,
  ],
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss', './../frontend.component.scss', './../../experience.scss']
})
export class HtmlComponent {
  skills: any = [];

  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.experience.frontend.html').subscribe(res => {
      this.skills = res['skills'];
    });
  }
}
