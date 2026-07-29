import { Component } from '@angular/core';
import { HtmlComponent } from './html/html.component';
import { AngularComponent } from './angular/angular.component';
import { TranslateModule } from '@ngx-translate/core';
import { JavascriptComponent } from '../backend/javascript/javascript.component';
import { TypescriptComponent } from '../backend/typescript/typescript.component';
import { ReactComponent } from './react/react.component';

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [
    TranslateModule,
    HtmlComponent,
    JavascriptComponent,
    TypescriptComponent,
    AngularComponent,
    ReactComponent,
],
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss', './../experience.scss']
})
export class FrontendComponent {

}
