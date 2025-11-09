import { Component, signal } from '@angular/core';
import { fadeInAnimation } from '../../../animations';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  animations: [fadeInAnimation]
})
export class Hero {
  readonly title = signal('Desarrollador Frontend Angular');
  readonly subtitle = signal('Especializado en crear experiencias web modernas y eficientes.');

}
