import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-trust-signals',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './trust-signals.component.html',
  styleUrl: './trust-signals.component.scss'
})
export class TrustSignalsComponent {}
