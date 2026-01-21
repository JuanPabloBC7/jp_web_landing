import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-n-tools',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './skills-n-tools.component.html',
  styleUrls: ['./skills-n-tools.component.scss']
})
export class SkillsNToolsComponent implements OnInit {
  translateSkills: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.skillsNTools.skills').subscribe(res => {
      this.translateSkills = res;
    });
  }

  ngOnInit(): void {
  }

}
