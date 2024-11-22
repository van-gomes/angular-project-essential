import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderService } from '../../components/templats/header/header.service';
import { Router } from '@angular/router';
import { Product } from '../../components/product/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  products: Product[] = [];

  constructor(private headerService: HeaderService,
              private router: Router
            ) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    };
  }
}

