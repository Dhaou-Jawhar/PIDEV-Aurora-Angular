import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listP:Product[]=[
    {id: 1, title: "Hoodie", price: 18, quantity: 0, like: 0, object: "hoodie.glb"},
      {id: 2, title: "Cap", price: 21, quantity: 10, like: 0, object: "Casquette.glb"},
      {id: 3, title: "MUG", price: 16, quantity: 8, like: 0, object: "MUG.glb"},
  ];
  constructor() { }

  addProduct(prod:Product){
      this.listP.push(prod)
  }

  }
