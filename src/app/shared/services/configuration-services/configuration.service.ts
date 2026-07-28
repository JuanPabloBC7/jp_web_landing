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
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');

    if (typeof window !== 'undefined' && window.localStorage) {
      if (!localStorage.getItem("lang")) {
        const browserLanguage = this.translate.getBrowserLang();
        const language = browserLanguage === 'es' ? 'es' : 'en';
        this.translate.use(language);
        localStorage.setItem("lang", language);
      } else {
        this.translate.use(localStorage.getItem("lang") || "en");
      }
      this.updateDocumentLanguage(localStorage.getItem("lang") || "en");
    } else {
      this.translate.use('es');
    }
  }

  setLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem("lang", language);
    this.updateDocumentLanguage(language);
  }

  private updateDocumentLanguage(language: string): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }
}
