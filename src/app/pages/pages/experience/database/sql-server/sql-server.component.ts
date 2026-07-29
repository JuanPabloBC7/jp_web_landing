import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface DatabaseImpact {
  icon: string;
  title: string;
  description: string;
}

interface DatabaseTool {
  name: string;
  class: string;
}

@Component({
  selector: 'app-sql-server',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sql-server.component.html',
  styleUrls: ['./sql-server.component.scss', './../../experience.scss']
})
export class SqlServerComponent {
  private readonly destroyRef = inject(DestroyRef);

  impact: DatabaseImpact[] = [];
  evidence: string[] = [];
  tools: DatabaseTool[] = [];
  otherTools: DatabaseTool[] = [];
  capabilities: string[] = [];

  constructor(private readonly translateService: TranslateService) {
    this.translateService
      .stream('pages.experience.database.sqlServer')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((content) => {
        this.impact = Array.isArray(content?.impact) ? content.impact : [];
        this.evidence = Array.isArray(content?.evidence) ? content.evidence : [];
        this.tools = Array.isArray(content?.tools) ? content.tools : [];
        this.otherTools = Array.isArray(content?.otherTools) ? content.otherTools : [];
        this.capabilities = Array.isArray(content?.capabilities) ? content.capabilities : [];
      });
  }
}
