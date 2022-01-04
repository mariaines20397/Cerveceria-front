import { Injectable, EventEmitter,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
@Output() transportandoProductos= new EventEmitter();
  constructor() { }
}
