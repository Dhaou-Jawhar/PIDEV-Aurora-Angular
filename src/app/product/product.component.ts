import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../core/model/product';
import { CalculService } from '../services/calcul.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
title:string = "This The Product"
listProduct!:Product[];
product!:Product;
alertStock!:number;

  //injecter le service dans le constructeur
  constructor(private service: ProductService , private calcule:CalculService) { }

  ngOnInit(): void {
    //affecter la liste de service dans la liste du produit
    this.listProduct=this.service.listP
    this.alertStock = this.calcule.getNumber(this.listProduct , 'quantity' , 0)
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(l : number){
    this.listProduct[l].like++;
  }

}
