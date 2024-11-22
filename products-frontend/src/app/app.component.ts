import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/templats/header/header.component';
import { FooterComponent } from './components/templats/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterOutlet,
     RouterModule,
     HeaderComponent,
     FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
