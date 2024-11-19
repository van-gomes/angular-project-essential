import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderService } from './header.service';
import { HomeComponent } from '../../../views/home/home.component';
import { ProductReadComponent } from '../../product/product-read/product-read.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ProductReadComponent,
    HomeComponent,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showComponentHome = false;
  showComponentProducts = false;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  toggleComponentHome(): void {
    this.showComponentHome = !this.showComponentHome;
  }

  toggleComponentProducts(): void {
    this.showComponentProducts = !this.showComponentProducts;
    console.log(this.showComponentProducts);
    console.log("chamou produtos")
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

}
