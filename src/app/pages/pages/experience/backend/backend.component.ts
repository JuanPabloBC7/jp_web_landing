import { Component } from '@angular/core';
import { JavascriptComponent } from "./javascript/javascript.component";
import { CSharpComponent } from './c-sharp/c-sharp.component';
import { PythonComponent } from "./python/python.component";
import { TranslateModule } from '@ngx-translate/core';
import { TypescriptComponent } from './typescript/typescript.component';

@Component({
  selector: 'app-backend',
  standalone: true,
  imports: [
    TranslateModule,
    JavascriptComponent,
    PythonComponent,
    CSharpComponent,
    TypescriptComponent,
],
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss', './../experience.scss']
})
export class BackendComponent {

}
