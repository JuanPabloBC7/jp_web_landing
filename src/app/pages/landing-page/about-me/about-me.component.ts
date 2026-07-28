import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  translateAboutUs: any = [];
  
  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream(['pages.aboutUs.skills']).subscribe(res => {
      const skills = res['pages.aboutUs.skills'];
      this.translateAboutUs = Array.isArray(skills) ? skills : [];
    });
  }

  ngOnInit(): void {
  }

}
