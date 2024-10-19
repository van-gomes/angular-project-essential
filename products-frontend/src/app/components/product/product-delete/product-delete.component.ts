import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {
  product: Product = { id: 0, name: '', price: 0 };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get("id") ?? 0);
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    if (this.product.id !== undefined) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage("Produto excluido com sucesso!");
        this.router.navigate(["/products"]);
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
