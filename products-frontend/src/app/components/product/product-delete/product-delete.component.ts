import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
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
        error: (error) => {
          this.productService.showMessage("Produto não encontrado!");
          this.router.navigate(["/products"]);
        }
      });
    } else {
      this.productService.showMessage("ID do produto é inválido.");
      this.router.navigate(["/products"]);
    }
  }
      
  deleteProduct(): void {
    if (this.product && this.product.id !== undefined) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage("Produto excluído com sucesso!");
        this.router.navigate(["/products"]);
      });
    } else {
      this.productService.showMessage("Produto inválido para exclusão.");
    }
  }
  
  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
