import { Component, LOCALE_ID } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from '../product.model';
import { ProductService} from '../product.service';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';

registerLocaleData(localePt);

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    NgFor
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent {
  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
