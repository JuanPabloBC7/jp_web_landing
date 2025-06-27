import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-n-tools',
  standalone: true,
  imports: [
    TranslateModule,
  ],
  templateUrl: './skills-n-tools.component.html',
  styleUrls: ['./skills-n-tools.component.scss']
})
export class SkillsNToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
