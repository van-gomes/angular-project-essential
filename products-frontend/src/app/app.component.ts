import { Component } from '@angular/core';
import { HeaderComponent } from './components/templats/header/header.component';
import { FooterComponent } from './components/templats/footer/footer.component';
import { NavComponent } from './components/templats/nav/nav.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [ RouterOutlet, 
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent {}
