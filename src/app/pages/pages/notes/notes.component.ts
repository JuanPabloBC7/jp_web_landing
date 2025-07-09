import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  columnOne: any = [];
  columnTwo: any = [];
  columnThree: any = [];
  badgeColor: any = [
    'text-primary-emphasis bg-primary-subtle border-primary-subtle',
    'text-secondary-emphasis bg-secondary-subtle border-secondary-subtle',
    'text-success-emphasis bg-success-subtle border-success-subtle',
    'text-danger-emphasis bg-danger-subtle border-danger-subtle',
    'text-warning-emphasis bg-warning-subtle border-warning-subtle',
    'text-info-emphasis bg-info-subtle border-info-subtle',
    'text-light-emphasis bg-light-subtle border-light-subtle',
    'text-dark-emphasis bg-dark-subtle border-dark-subtle',
  ]

  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream(['pages.notes.columnOne', 'pages.notes.columnTwo', 'pages.notes.columnThree']).subscribe(res => {
      this.columnOne = res['pages.notes.columnOne'].map((item: any) => ({
        ...item,
        tags: item.tags.map((tag: string) => ({
          value: tag,
          badgeClass: this.getRandomBadgeColor()
        }))
      }));

      this.columnTwo = res['pages.notes.columnTwo'].map((item: any) => ({
        ...item,
        tags: item.tags.map((tag: string) => ({
          value: tag,
          badgeClass: this.getRandomBadgeColor()
        }))
      }));

      this.columnThree = res['pages.notes.columnThree'].map((item: any) => ({
        ...item,
        tags: item.tags.map((tag: string) => ({
          value: tag,
          badgeClass: this.getRandomBadgeColor()
        }))
      }));
    });
  }

  getRandomBadgeColor(): string {
    const idx = Math.floor(Math.random() * this.badgeColor.length);
    return this.badgeColor[idx];
  }
}
