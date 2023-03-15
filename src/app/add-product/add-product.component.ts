import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product !: Product;
  constructor(private serviceProd:ProductService , private route:Router) { }

  ngOnInit(): void {
    this.product = new Product;
  }

  addProduct(){
    //consume addProduct() from Service , and put product in parametre
    this.serviceProd.addProduct(this.product);

    //redirect after click add
    this.route.navigateByUrl("/products");

  }

}
