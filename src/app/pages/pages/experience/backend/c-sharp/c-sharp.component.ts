import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-c-sharp',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgbTooltipModule
  ],
  templateUrl: './c-sharp.component.html',
  styleUrls: ['./c-sharp.component.scss', './../backend.component.scss', './../../experience.scss']
})
export class CSharpComponent {
  skills: any = [];
  tools: any = [];
  dependencies: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.experience.backend.csharp').subscribe(res => {
      this.skills = res['skills'];
      this.tools = res['tools'];
      this.dependencies = res['dependencies'];
    });
  }
}
