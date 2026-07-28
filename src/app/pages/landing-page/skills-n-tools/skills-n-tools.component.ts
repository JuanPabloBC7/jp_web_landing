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
  readonly groups = [
    {
      id: 'frontend',
      icon: 'fa-solid fa-code',
      skillIds: ['html', 'css3', 'sass', 'angular', 'react', 'javascript', 'typescript', 'flutter', 'bootstrap', 'jquery']
    },
    {
      id: 'backend',
      icon: 'fa-solid fa-database',
      skillIds: ['aspnet', 'nodejs', 'python', 'php', 'java', 'csharp', 'visualbasic', 'sqlserver', 'mysql', 'oracle', 'mongodb', 'mariadb', 'postgresql', 'firebase', 'supabase']
    },
    {
      id: 'cloud',
      icon: 'fa-solid fa-cloud',
      skillIds: ['aws', 'azure', 'devops', 'git', 'npm', 'n8n', 'elevenlabs', 'vercel', 'render']
    }
  ];

  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('pages.skillsNTools.skills').subscribe(res => {
      this.translateSkills = Array.isArray(res) ? res : [];
    });
  }

  ngOnInit(): void {
  }

  skillsFor(skillIds: string[]): any[] {
    if (!Array.isArray(this.translateSkills)) {
      return [];
    }

    return skillIds
      .map(id => this.translateSkills.find((skill: any) => skill.id === id))
      .filter(Boolean);
  }
}
