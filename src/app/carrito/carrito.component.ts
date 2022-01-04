import { Component, OnInit, Input } from '@angular/core';
import { beer } from '../beer/beer';
import { CarritoService } from '../carrito.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  cartProduct:any[]=[]
  arrCarrito:any[]=[];
  arrProductCarrito:any[]=[]
  arrProductsNew:any []=beer
  /**
   * Guarda el resultado que se arroje luego de aplicar el metodo filter() en la funcion
   * filtrar y filtrarPrice. Luego es usado como parametro del metodo push aplicado en 
   * newArray.
   */
  type_product:any=[]
//  mostrar:any[]=[]
  constructor(public carritoService:CarritoService) { }

  ngOnInit(): void {
  /*  this.carritoService.transportandoProductos.subscribe(productos=>{
      this.cartProduct.push(productos)
      
    })*/
    
  }
  sumarCarrito(event:any){
    this.type_product=this.arrProductsNew.filter(id => id.id == event.target.value)
    this.arrCarrito=[]
    this.arrCarrito.push(this.type_product)
    for (let i = 0; i < this.arrCarrito.length; i++) {
      const element = this.arrCarrito[i];
      for (let i = 0; i < element.length; i++) {
        const obj = element[i];
        this.arrProductCarrito.push(obj)
      }
    //console.log(this.arrProductCarrito);
     this.carritoService.transportandoProductos.emit({productos : this.arrProductCarrito});
    }
    
     
     
     
   }
  
}
