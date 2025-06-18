import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService } from './shared/services/configuration-services/configuration.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  constructor(private configurationServices: ConfigurationService) {
    this.configurationServices.configureLanguage();
  }
}
