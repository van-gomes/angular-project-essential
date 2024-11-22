import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/templats/header/header.service';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [
    ProductReadComponent
  ],
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: 'products'
    };
  }

  ngOnInit(): void {
    console.log('ProductCrudComponent carregado.');
  }
}