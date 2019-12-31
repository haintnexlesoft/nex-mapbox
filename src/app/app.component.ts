import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nex-mapbox';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    console.log('browserLang', browserLang);
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
