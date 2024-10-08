import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})

export class ProductCreateComponent implements OnInit{
  constructor(private productService: ProductService,
    private router: Router) { }

    ngOnInit(): void {}

    createProduct(): void {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    }
  
    cancel(): void {
      this.router.navigate(['/products'])
    }

}
