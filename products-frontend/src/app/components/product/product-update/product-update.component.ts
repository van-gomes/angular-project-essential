import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule // Adiciona CommonModule
  ],
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  product: Product = { id: '0', name: '', price: 0 };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtém o ID da rota como string
    const id = this.route.snapshot.paramMap.get("id");
  
    if (id) {
      this.productService.readById(id).subscribe({
        next: (product) => {
          this.product = product;
        },
        error: () => {
          this.productService.showMessage("Produto não encontrado!");
          this.router.navigate(["/products"]);
        }
      });
    } else {
      this.productService.showMessage("ID do produto é inválido.");
      this.router.navigate(["/products"]);
    }
  }
  
  updateProduct(): void {
    if (this.product) {
      this.productService.update(this.product).subscribe(() => {
        this.productService.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/products"]);
      });
    }
  }
  
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}