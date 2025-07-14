import { Component } from '@angular/core';
import { JavascriptComponent } from "./javascript/javascript.component";
import { CSharpComponent } from './c-sharp/c-sharp.component';
import { PythonComponent } from "./python/python.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-backend',
  standalone: true,
  imports: [
    TranslateModule,
    JavascriptComponent,
    PythonComponent,
    CSharpComponent,
],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.scss'
})
export class BackendComponent {

}
