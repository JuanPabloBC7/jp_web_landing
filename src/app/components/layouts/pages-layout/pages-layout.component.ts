import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarTopComponent } from '../../commons/navbar/pages/navbar-top/navbar-top.component';
import { NavbarVerticalComponent } from '../../commons/navbar/pages/navbar-vertical/navbar-vertical.component';
import { SimpleFooterComponent } from '../../commons/footer/simple-footer/simple-footer.component';
import { ConfigurationService } from '../../../shared/services/configuration-services/configuration.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    NavbarTopComponent, 
    NavbarVerticalComponent, 
    SimpleFooterComponent, 
  ],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss'
})
export class PagesLayoutComponent {

  constructor(private configurationServices: ConfigurationService) {
    this.configurationServices.configureLanguage();
    if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
      document.body.setAttribute('data-bs-theme', localStorage.getItem('theme') || 'light');
    }
  }
}
