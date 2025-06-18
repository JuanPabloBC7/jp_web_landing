import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
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
  ],
  templateUrl: './landing-navbar-top.component.html',
  styleUrls: ['./landing-navbar-top.component.scss']
})
export class LandingNavbarTopComponent implements OnInit {
  isOpen = false;
  navigation: any = [];
  translate: any = {};

  constructor(
    private router: Router,
    private translateServices: TranslateService,
    private configurationServices: ConfigurationService,
  ) { 
    this.translateServices.stream('configuration.navbar').subscribe(res => {
      this.translate = res;
      this.navigation = [];
      for (const key in res.links) {
        if (key === 'home') {
          this.navigation.push({name: key, value: res.links[key], href: `/`});
        } else {
          this.navigation.push({name: key, value: res.links[key], href: `/${key}`});
        }
      }
    });
  }

  ngOnInit(): void {
  }

  isActive(href: string): boolean {
    return this.router.url === href;
  }

  setLanguage(language: string) {
    this.configurationServices.setLanguage(language);
  }
}
