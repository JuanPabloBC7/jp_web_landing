import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-python',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgbTooltipModule
  ],
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss', './../backend.component.scss', './../../experience.scss']
})
export class PythonComponent {
  skills: any = [];
  tools: any = [];
  dependencies: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.experience.backend.python').subscribe(res => {
      this.skills = res['skills'];
      this.tools = res['tools'];
      this.dependencies = res['dependencies'];
    });
  }
}
