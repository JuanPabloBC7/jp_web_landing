import { Component, OnInit } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-informative-footer',
  standalone: true,
  imports: [
    TranslateModule,
    NgbTooltipModule,
  ],
  templateUrl: './informative-footer.component.html',
  styleUrls: ['./informative-footer.component.scss']
})
export class InformativeFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
