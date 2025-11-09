import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
   animations: [fadeInAnimation]
})
export class Footer {

  email = 'jmjfp3x4z@mozmail.com';
  telegramUser = 'leodanisbernal';
  telegramLink = 'https://t.me/leodanisbernal';
  linkedinLink = 'https://www.linkedin.com/in/leodanis-bernal-iba%C3%B1ez/';

  // 3. Creamos una propiedad para el año
  currentYear: number = 0;

  // 4. Implementamos el método ngOnInit
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  openEmail() {
    window.location.href = `mailto:${this.email}`;
  }

}
