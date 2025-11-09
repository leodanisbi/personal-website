import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';

// Animación de entrada suave (fade in)
export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

// Animación para elementos que aparecen en secuencia (stagger)
export const staggeredFadeInAnimation = trigger('staggeredFadeIn', [
  transition(':enter', [
    query('@fadeIn', [
      stagger(100, [
        animate('0.5s ease-out')
      ])
    ], { optional: true })
  ]),
]);