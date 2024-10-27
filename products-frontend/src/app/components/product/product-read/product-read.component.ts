import { Component, LOCALE_ID } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { RouterModule, Router } from '@angular/router';
import { ProductService} from '../product.service';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

registerLocaleData(localePt);

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {
  products: Product[] = [];
  displayedColumns = ['icon', 'id', 'name', 'price', 'action']
  
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
