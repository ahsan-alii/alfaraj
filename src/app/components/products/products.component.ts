import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProds: any;
  cats:any;
  constructor(
    private products: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products.allProds.subscribe((prods) => {
      console.log('All prods: ', prods);
      this.allProds = prods;
    });
    this.products.getAllCats().toPromise().then(categories=>{
      this.cats=categories;
      console.log(this.cats);
      
    })
  }
  addToCart(prod) {
    this.cartService.addToCart(prod);
  }
}
