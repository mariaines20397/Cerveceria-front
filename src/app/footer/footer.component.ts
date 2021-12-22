import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Variable que contiene el valor que se mostrara en el footer
   */
  chart='CHART'
  /**
   * Variable que contiene el valor que se mostrara en el footer
   */
  call='LLAMAR'
  /**
   * Variable que contiene uno de los valores de la lista que mustra el footer
   */
  aboutUs='SOBRE NOSOTROS'
  /**
   * Variable que contiene uno de los valores de la lista que mustra el footer
   */
  security='MEDIDAS DE SEGURIDAD (COVID-19)'
  /**
   * Variable que contiene uno de los valores de la lista que mustra el footer
   */
  howToCall='CÓMO MARCAR'
  /**
   * Variable que contiene uno de los valores de la lista que mustra el footer
   */
  provider='PROVEEDORES'
  /**
   * Variable que contiene uno de los valores de la lista que mustra el footer
   */
  contact='CONTÁCTENOS'
  /**
   * Variable que contiene uno de los valores de la lista que mustra el footer
   */
  coverage='ZONA DE COBERTURA'
  /**
   * Variable que contiene el valor mostrando las politicas de tratamiento de datos personales
   */
  politics='POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES'
}
