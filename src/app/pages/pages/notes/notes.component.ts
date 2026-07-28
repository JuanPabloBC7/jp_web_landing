import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  notes: any[] = [];
  searchTerm = '';
  activeTag = '';

  constructor(private translateServices: TranslateService) {
    this.translateServices.stream('pages.notes.columnOne').subscribe((notes: any[]) => {
      this.notes = Array.isArray(notes)
        ? [...notes].sort((a, b) => this.dateValue(b.date) - this.dateValue(a.date))
        : [];
    });
  }

  get availableTags(): string[] {
    return [...new Set(this.notes.flatMap(note => note.tags))].sort((a, b) => a.localeCompare(b));
  }

  get filteredNotes(): any[] {
    const term = this.searchTerm.trim().toLocaleLowerCase();

    return this.notes.filter(note => {
      const matchesTag = !this.activeTag || note.tags.includes(this.activeTag);
      const searchableContent = `${note.title} ${this.stripHtml(note.note)} ${note.tags.join(' ')}`.toLocaleLowerCase();
      return matchesTag && (!term || searchableContent.includes(term));
    });
  }

  selectTag(tag: string): void {
    this.activeTag = this.activeTag === tag ? '' : tag;
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.activeTag = '';
  }

  private dateValue(date: string): number {
    const [day, month, year] = date.split('/').map(Number);
    return new Date(year, month - 1, day).getTime();
  }

  private stripHtml(value: string): string {
    return value.replace(/<[^>]*>/g, ' ');
  }
}
