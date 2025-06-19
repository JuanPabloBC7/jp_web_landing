import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-simple-footer',
  standalone: true,
  imports: [
    TranslateModule,
  ],
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.scss']
})
export class SimpleFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
