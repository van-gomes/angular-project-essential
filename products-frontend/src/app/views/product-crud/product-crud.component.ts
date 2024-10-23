import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { ProductUpdateComponent } from '../../components/product/product-update/product-update.component';
import { ProductDeleteComponent } from '../../components/product/product-delete/product-delete.component';
import { HeaderService } from '../../components/templats/header/header.service';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
  
}
