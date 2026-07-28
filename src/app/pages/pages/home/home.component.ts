import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ContactMeComponent } from '../../landing-page/contact-me/contact-me.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ContactMeComponent,
    NgbTooltipModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  translateSocial: any = {};
  socialMedia: any = [];

  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('configuration.social').subscribe(res => {
      this.translateSocial = res;
      this.socialMedia = [];

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
}
