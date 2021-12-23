import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeLang;
  constructor(private translate:TranslateService) { 
    
    this.activeLang = this.translate.currentLang
  }

  ngOnInit(): void {
  }
  /**
   * Variable que contiene el titulo de la app
   */
  title = 'Cervezas';
  
  public changeLang(lang:string) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
