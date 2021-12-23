import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langs:string[]=[];
  title = 'cerveceria-front';
   defaultLang='EN';
   useLang='EN';
  constructor(private translate: TranslateService) {
    translate.addLangs(['ES', 'EN']);
    this.translate.setDefaultLang(this.defaultLang);
    this.translate.use(this.useLang);
    localStorage.setItem('lang',this.useLang);
  
    
  }

  changeLang(lang:string){
    this.useLang=lang;
    this.translate.use(lang);
    localStorage.setItem('lang',lang)
  }
}
