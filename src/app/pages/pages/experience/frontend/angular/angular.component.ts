import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgbTooltipModule
  ],
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss', './../frontend.component.scss', './../../experience.scss']
})
export class AngularComponent {
  skills: any = [];
  tools: any = [];
  dependencies: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.experience.frontend.angular').subscribe(res => {
      this.skills = res['skills'];
      this.tools = res['tools'];
      this.dependencies = res['dependencies'];
    });
  }
}
