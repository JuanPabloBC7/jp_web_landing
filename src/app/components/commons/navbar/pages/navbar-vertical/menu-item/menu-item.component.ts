import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() item: any;
  @Output() isOpen = new EventEmitter<boolean>();
  showMenu: boolean = true;

  constructor(
    private router: Router,
  ) { }

  hideMenu(isOpen: boolean): void {
    this.isOpen.emit(isOpen);
  }

  executeFunction(name: string | undefined): void {
    if (name === 'logout') {
      this.logout();
    }
  }
  
  logout(): void {
    this.router.navigate(['/']);
  }
}
