import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { ProductUpdateComponent } from '../../components/product/product-update/product-update.component';
import { ProductDeleteComponent } from '../../components/product/product-delete/product-delete.component';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})

export class ProductCrudComponent {

  constructor(private router: Router) {
  }

    navigateToProductCreate(): void {
      this.router.navigate(['/products/create']);
    }
  }