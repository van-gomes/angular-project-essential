import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from '../product.model';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
