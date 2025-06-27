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
  translateSkills: any = {};
  skills: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.skillsNTools.skills').subscribe(res => {
      this.translateSkills = res;
      this.skills = [];

      for (const key in this.translateSkills) {
        this.skills.push({name: this.translateSkills[key].name, prefix: this.translateSkills[key].prefix, icon: this.translateSkills[key].icon, img: this.translateSkills[key].img});
      }
    });
  }

  ngOnInit(): void {
  }

}
