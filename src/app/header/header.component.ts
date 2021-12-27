import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Variable que almecena el lenguaje activo 
   */
  public activeLang;
  /**
   * Variable boolean que ayudará a saber su fue seleccionado el menu 
   */
  menu=false;
  constructor(private translate:TranslateService) { 
    
    this.activeLang = this.translate.currentLang
  }

  ngOnInit(): void {
  }
  /**
   * Función usada para traducir la pagina
   */

  
  public changeLang(lang:string) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
  /**
   * Función que cambia el valor de menu cuando sea clickeado.
   */
  public Menu() {
    if (this.menu==false) {
      this.menu=true
    }else{
      this.menu=false
    }
  }
}
