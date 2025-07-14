import { Component } from '@angular/core';
import { HtmlComponent } from './html/html.component';
import { AngularComponent } from './angular/angular.component';
import { AspNetComponent } from "./asp-net/asp-net.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [
    TranslateModule,
    HtmlComponent,
    AngularComponent,
    AspNetComponent,
],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.scss'
})
export class FrontendComponent {

}
