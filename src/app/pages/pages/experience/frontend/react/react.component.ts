import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface ExperienceTool {
  name: string;
  class: string;
}

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss', './../../experience.scss']
})
export class ReactComponent {
  private readonly destroyRef = inject(DestroyRef);

  evidence: string[] = [];
  tools: ExperienceTool[] = [];

  constructor(private readonly translateService: TranslateService) {
    this.translateService
      .stream('pages.experience.frontend.react')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((content) => {
        this.evidence = Array.isArray(content?.evidence) ? content.evidence : [];
        this.tools = Array.isArray(content?.tools) ? content.tools : [];
      });
  }
}
