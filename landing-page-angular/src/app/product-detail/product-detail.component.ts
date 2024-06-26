import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  // producto: string = '';
  product?: Product;
  productList: Product[] = productsList;
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute) {

  }

  // ngOnInit(): void {
  //   this._route.params.subscribe(params => {
  //     // this.product = params['productId'];
  //     this.product = this.productList.find(product => product.id == params['productId']);
  //   });
  // }

  ngOnInit(): void {
    setTimeout(()=> {
      this._route.params.subscribe(params => {
        this.product = this.productList.find(product => product.id == params['productId']);
        this.loading = false;
        this.color = this.product?.price as number > 5 ? 'red' : '';
      });
    }, 1500);
  }
}
