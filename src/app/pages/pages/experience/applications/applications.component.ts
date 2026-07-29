import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface ApplicationExperience {
  title: string;
  description: string;
  iconClass: string;
  evidence: string[];
  tools: string[];
}

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss', './../experience.scss']
})
export class ApplicationsComponent {
  private readonly destroyRef = inject(DestroyRef);

  items: ApplicationExperience[] = [];

  constructor(private readonly translateService: TranslateService) {
    this.translateService
      .stream('pages.experience.applications.items')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items) => {
        this.items = Array.isArray(items) ? items : [];
      });
  }
}
