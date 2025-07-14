import { Component } from '@angular/core';
import { SqlServerComponent } from './sql-server/sql-server.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [
    TranslateModule,
    SqlServerComponent,
  ],
  templateUrl: './database.component.html',
  styleUrl: './database.component.scss'
})
export class DatabaseComponent {

}
