import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { RedDirective } from '../../../directives/red.directive';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbarModule,
    RedDirective
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
