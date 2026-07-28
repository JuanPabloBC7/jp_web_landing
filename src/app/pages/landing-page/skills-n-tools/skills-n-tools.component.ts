import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-n-tools',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './skills-n-tools.component.html',
  styleUrls: ['./skills-n-tools.component.scss']
})
export class SkillsNToolsComponent implements OnInit {
  translateSkills: any = [];
  searchTerm = '';
  readonly groups = [
    {
      id: 'frontend',
      icon: 'fa-solid fa-code',
      skillIds: ['html', 'css3', 'sass', 'tailwind', 'angular', 'react', 'reactbits', 'javascript', 'typescript', 'flutter', 'bootstrap', 'primeng', 'jquery']
    },
    {
      id: 'backend',
      icon: 'fa-solid fa-database',
      skillIds: ['aspnet', 'nodejs', 'python', 'php', 'java', 'csharp', 'visualbasic', 'powerbuilder', 'sqlserver', 'mysql', 'oracle', 'mongodb', 'mariadb', 'postgresql', 'firebase', 'supabase']
    },
    {
      id: 'cloud',
      icon: 'fa-solid fa-cloud',
      skillIds: ['aws', 'azure', 'devops', 'git', 'npm', 'tailscale', 'n8n', 'elevenlabs', 'vercel', 'render']
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

    const term = this.normalize(this.searchTerm);

    return skillIds
      .map(id => this.translateSkills.find((skill: any) => skill.id === id))
      .filter(Boolean)
      .filter((skill: any) => {
        if (!term) {
          return true;
        }

        return this.normalize(`${skill.id} ${skill.name} ${skill.prefix || ''}`).includes(term);
      });
  }

  get filteredSkillCount(): number {
    return this.groups.reduce((total, group) => total + this.skillsFor(group.skillIds).length, 0);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  private normalize(value: string): string {
    return value
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
