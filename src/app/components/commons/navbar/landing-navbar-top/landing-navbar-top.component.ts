import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigurationService } from '../../../../shared/services/configuration-services/configuration.service';

@Component({
  selector: 'app-landing-navbar-top',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    CommonModule,
    TranslateModule,
    NgbDropdownModule,
    NgbTooltipModule,
  ],
  templateUrl: './landing-navbar-top.component.html',
  styleUrls: ['./landing-navbar-top.component.scss']
})
export class LandingNavbarTopComponent implements OnInit {
  isOpen = false;
  isDark = false;
  appearance: string = '';
  navigation: any = [];
  translateNavbar: any = {};
  translateAppearance: any = {};

  constructor(
    private router: Router,
    private translateServices: TranslateService,
    private configurationServices: ConfigurationService,
  ) { 
    this.translateServices.stream(['configuration.navbar', 'configuration.appearance']).subscribe(res => {
      this.translateNavbar = res['configuration.navbar'];
      this.translateAppearance = res['configuration.appearance'];
      this.navigation = [];
      for (const key in this.translateNavbar.links) {
        if (key === 'home') {
          this.navigation.push({
            name: key,
            value: this.translateNavbar.links[key],
            routerLink: '/',
          });
        } else {
          this.navigation.push({
            name: key,
            value: this.translateNavbar.links[key],
            routerLink: '/',
            fragment: key,
          });
        }
      }
      for (const key in this.translateNavbar.others) {
        if (key === 'projects') {
          this.navigation.push({name: key, value: this.translateNavbar.others[key], routerLink: `/${key}/about-us`});
        }
      }

      localStorage.getItem('theme') === 'dark' ? this.appearance = this.translateAppearance.options.light : this.appearance = this.translateAppearance.options.dark;
    });

    localStorage.getItem('theme') === 'dark' ? this.isDark = false : this.isDark = true;
  }

  ngOnInit(): void {
  }

  isActive(item: any): boolean {
    if (item.fragment) {
      return this.router.url === `/#${item.fragment}`;
    }

    return this.router.url === item.routerLink;
  }

  setLanguage(language: string) {
    this.configurationServices.setLanguage(language);
  }

  toggleTheme() {
    const current = localStorage.getItem('theme') || document.body.getAttribute('data-bs-theme') || 'light';
    document.body.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', current === 'dark' ? 'light' : 'dark');

    current === 'dark' ? this.isDark = true : this.isDark = false;
    current === 'dark' ? this.appearance = this.translateAppearance.options.dark : this.appearance = this.translateAppearance.options.light;
  }
}
