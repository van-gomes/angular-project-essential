import { Component, LOCALE_ID } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductService} from '../product.service';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { MatTableModule } from '@angular/material/table';

registerLocaleData(localePt);

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    MatTableModule
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
  displayedColumns = ['id', 'name', 'price']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
