import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [
    NgbTooltipModule
  ],
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss', './../backend.component.scss', './../../experience.scss']
})
export class TypescriptComponent {

}
