import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

interface ExperienceTool {
  name: string;
  class?: string;
  link?: string;
}

interface ExperienceDependency {
  name: string;
  link: string;
}

interface ExperienceItem {
  id: string;
  title: string;
  context: string;
  description: string;
  iconClass: string;
  accentClass: string;
  evidenceTitle: string;
  evidence: string[];
  toolsTitle: string;
  tools: ExperienceTool[];
  dependencies?: ExperienceDependency[];
  relatedLabel?: string;
  relatedPath?: string;
}

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
],
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss', './../experience.scss']
})
export class FrontendComponent {
  private readonly destroyRef = inject(DestroyRef);

  items: ExperienceItem[] = [];

  constructor(private readonly translateService: TranslateService) {
    this.translateService
      .stream('pages.experience.frontend.items')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items) => {
        this.items = Array.isArray(items) ? items : [];
      });
  }
}
