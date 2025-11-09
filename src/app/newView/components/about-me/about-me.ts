import { Component, signal } from '@angular/core';
import { fadeInAnimation, staggeredFadeInAnimation } from '../../../animations';
import { Modal } from '../../../layout/modal/modal';


@Component({
  selector: 'app-about-me',
  imports: [Modal],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  animations: [fadeInAnimation, staggeredFadeInAnimation]
})
export class AboutMe {
   birthDate = new Date(1990, 10, 20); // Mes es 10 (Noviembre) porque es base 0
  isModalOpen = signal<boolean>(false);

  // Método para calcular la edad dinámicamente
  age(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const monthDifference = today.getMonth() - this.birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

}
