import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-navbar-top',
  standalone: true,
  imports: [RouterLink, NgClass, CommonModule],
  templateUrl: './landing-navbar-top.component.html',
  styleUrls: ['./landing-navbar-top.component.scss']
})
export class LandingNavbarTopComponent implements OnInit {

  navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' }
  ];
  isOpen = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isActive(href: string): boolean {
    return this.router.url === href;
  }

}
