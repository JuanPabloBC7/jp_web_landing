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
    if (typeof window !== 'undefined' && window.sessionStorage) {
      if (!sessionStorage.getItem("lang")) {
        this.translate.addLangs(['es', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use(this.translate.getBrowserLang() || "en");
        sessionStorage.setItem("lang", this.translate.getBrowserLang() || "en");
      } else {
        this.translate.use(sessionStorage.getItem("lang") || "en");
      }
    }
  }

  setLanguage(language: string) {
    this.translate.use(language);
    sessionStorage.setItem("lang", language);
  }
}
