import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface DatabaseItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  evidenceTitle: string;
  evidence: string[];
  toolsTitle: string;
  tools: { name: string; class: string }[];
  otherToolsTitle?: string;
  otherTools?: { name: string; class: string }[];
  capabilitiesTitle?: string;
  capabilities?: string[];
  relatedLabel?: string;
  relatedTitle?: string;
  relatedPath?: string;
}

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss', './../experience.scss']
})
export class DatabaseComponent {
  private readonly destroyRef = inject(DestroyRef);

  items: DatabaseItem[] = [];

  constructor(private readonly translateService: TranslateService) {
    this.translateService
      .stream('pages.experience.database.items')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items) => {
        this.items = Array.isArray(items) ? items : [];
      });
  }
}
