import { Component } from '@angular/core';

import { MatCardModule } from  '@angular/material/card'
import { HeaderService } from '../../components/templats/header/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
