import { Component } from '@angular/core';
import { HeaderComponent } from './components/templats/header/header.component';
import { FooterComponent } from './components/templats/footer/footer.component';
import { NavComponent } from './components/templats/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [ 
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    MatButtonModule,
    MatSnackBar
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent {}
