import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingNavbarTopComponent } from '../../commons/navbar/landing-navbar-top/landing-navbar-top.component';
import { InformativeFooterComponent } from '../../commons/footer/informative-footer/informative-footer.component';
import { ConfigurationService } from '../../../shared/services/configuration-services/configuration.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    LandingNavbarTopComponent, 
    InformativeFooterComponent
  ],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss'
})
export class LandingLayoutComponent {

  constructor(private configurationServices: ConfigurationService) {
    this.configurationServices.configureLanguage();
    if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
      document.body.setAttribute('data-bs-theme', localStorage.getItem('theme') || 'light');
    }
  }
}
