import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderService } from './header.service';
import { HomeComponent } from '../../../views/home/home.component';
import { ProductReadComponent } from '../../product/product-read/product-read.component';
import { MatButtonModule } from '@angular/material/button';
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
  currentComponent: string = 'home'; // Componente inicial é 'home'

  constructor(private headerService: HeaderService) {}

  // toggleComponent(): void {
  //   this.currentComponent = this.currentComponent === 'home' ? 'products' : 'home';
  // }

  toggleComponent(component: string): void {
    // Atualiza o valor de currentComponent para o componente clicado
    this.currentComponent = component;
  }
  
  get title(): string {
    return this.headerService.headerData?.icon ?? '';
  }

  get icon(): string {
    return this.headerService.headerData?.routeUrl ?? '';
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}