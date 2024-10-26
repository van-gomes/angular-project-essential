import { Component } from '@angular/core';
import { HeaderService } from '../../components/templats/header/header.service';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [],
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  } 
}
