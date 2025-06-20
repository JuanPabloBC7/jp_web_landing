import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(
    private translate: TranslateService,
  ) { }

  configureLanguage() {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (!localStorage.getItem("lang")) {
        this.translate.addLangs(['es', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use(this.translate.getBrowserLang() || "en");
        localStorage.setItem("lang", this.translate.getBrowserLang() || "en");
      } else {
        this.translate.use(localStorage.getItem("lang") || "en");
      }
    }
  }

  setLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem("lang", language);
  }
}
