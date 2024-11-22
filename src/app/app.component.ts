import { Component } from '@angular/core';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PaisModule,
    SharedModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'paisessApp';
}
