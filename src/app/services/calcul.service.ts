import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  product!:Product;

  constructor() { }

  getNumber(list:any[], critiria:string, value:any){
    let n=0;
    for(let i in list){
      if (list[i][critiria] === value)  // "===" test sur le valeur et le type
      n++;
    }
    return n;
    }

  }
