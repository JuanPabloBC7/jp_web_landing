import { Component } from '@angular/core';
import { CSharpComponent } from './c-sharp/c-sharp.component';
import { PythonComponent } from "./python/python.component";
import { TranslateModule } from '@ngx-translate/core';
import { AspNetComponent } from '../frontend/asp-net/asp-net.component';

@Component({
  selector: 'app-backend',
  standalone: true,
  imports: [
    TranslateModule,
    PythonComponent,
    CSharpComponent,
    AspNetComponent,
],
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss', './../experience.scss']
})
export class BackendComponent {

}
