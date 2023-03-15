import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id!:number;
  title!:string;
  product!:Product;

  constructor(private route : ActivatedRoute , private serviceProd:ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = this.serviceProd.listP[this.id-1];
  }

}
