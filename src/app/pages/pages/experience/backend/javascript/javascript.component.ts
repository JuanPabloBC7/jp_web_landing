import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgbTooltipModule
  ],
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss', './../backend.component.scss', './../../experience.scss']
})
export class JavascriptComponent {
  skills: any = [];
  tools: any = [];
  plugins: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.experience.backend.javascript').subscribe(res => {
      this.skills = res['skills'];
      this.tools = res['tools'];
      this.plugins = res['plugins'];
    });
  }
}
