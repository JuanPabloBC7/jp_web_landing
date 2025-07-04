import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-informative-footer',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    TranslateModule,
    NgbTooltipModule,
  ],
  templateUrl: './informative-footer.component.html',
  styleUrls: ['./informative-footer.component.scss']
})
export class InformativeFooterComponent implements OnInit {
  translateNavbar: any = {};
  translateSocial: any = {};
  navigation: any = [];
  otherNavigation: any = [];
  socialMedia: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream(['configuration.navbar', 'configuration.social']).subscribe(res => {
      this.translateNavbar = res['configuration.navbar'];
      this.translateSocial = res['configuration.social'];
      this.navigation = [];
      this.otherNavigation = [];
      this.socialMedia = [];

      for (const key in this.translateNavbar.links) {
        if (key === 'home') {
          this.navigation.push({name: key, value: this.translateNavbar.links[key], href: `/`});
        } else {
          this.navigation.push({name: key, value: this.translateNavbar.links[key], href: `/#${key}`});
        }
      }
      for (const key in this.translateNavbar.others) {
        if (key === 'projects') {
          this.otherNavigation.push({name: key, value: this.translateNavbar.others[key], routerLink: `/${key}/about-us`});
        }
      }

      for (const key in this.translateSocial.links) {
        switch (key) {
          case 'facebook':
          case 'instagram':
          case 'whatsapp':
          case 'telegram':
          case 'twitter':
          case 'github':
          case 'linkedin':
            this.socialMedia.push({name: this.translateSocial.links[key].name, icon: this.translateSocial.links[key].icon, href: this.translateSocial.links[key].link});
            break;
          case 'email':
            this.socialMedia.push({name: this.translateSocial.links[key].name, icon: this.translateSocial.links[key].icon, href: 'mailto:' + this.translateSocial.links[key].link});
            break;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
