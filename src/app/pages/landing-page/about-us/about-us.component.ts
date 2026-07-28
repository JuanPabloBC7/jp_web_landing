import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
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
