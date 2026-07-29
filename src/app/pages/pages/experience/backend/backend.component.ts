import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
  tools: { name: string; class?: string; link?: string }[];
  dependencies?: { name: string; link: string }[];
  relatedLabel?: string;
  relatedPath?: string;
}

@Component({
  selector: 'app-backend',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
],
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss', './../experience.scss']
})
export class BackendComponent {
  private readonly destroyRef = inject(DestroyRef);

  items: ExperienceItem[] = [];

  constructor(private readonly translateService: TranslateService) {
    this.translateService
      .stream('pages.experience.backend.items')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items) => {
        this.items = Array.isArray(items) ? items : [];
      });
  }
}
