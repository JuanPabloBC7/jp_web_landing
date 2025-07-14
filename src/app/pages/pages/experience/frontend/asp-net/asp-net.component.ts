import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-asp-net',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgbTooltipModule
  ],
  templateUrl: './asp-net.component.html',
  styleUrls: ['./asp-net.component.scss', './../frontend.component.scss', './../../experience.scss']
})
export class AspNetComponent {
  skills: any = [];
  tools: any = [];
  plugins: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.experience.frontend.aspnet').subscribe(res => {
      this.skills = res['skills'];
      this.tools = res['tools'];
      this.plugins = res['plugins'];
    });
  }
}
