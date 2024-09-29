import { Component } from '@angular/core';
import { HeaderComponent } from './components/templats/header/header.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [ RouterOutlet, 
    HeaderComponent,
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent {}
