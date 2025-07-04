import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  constructor(
    private router: Router,
  ) { }

  executeFunction(name: string | undefined): void {
    if (name === 'logout') {
      this.logout();
    }
  }
  
  logout(): void {
    this.router.navigate(['/']);
  }
}
