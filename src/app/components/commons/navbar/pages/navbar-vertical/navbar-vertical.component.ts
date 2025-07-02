import { Component } from '@angular/core';
import { NgbDropdown, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar-vertical',
  standalone: true,
  imports: [
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu
  ],
  templateUrl: './navbar-vertical.component.html',
  styleUrl: './navbar-vertical.component.scss'
})
export class NavbarVerticalComponent {

}
