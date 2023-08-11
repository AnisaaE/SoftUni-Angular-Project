import { trigger, state, style, animate, transition } from '@angular/animations';

export const recipeCardHover = trigger('recipeCardHover', [
  state('normal', style({
    transform: 'translateY(0)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  })),
  state('hovered', style({
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)'
  })),
  transition('normal <=> hovered', animate('150ms ease-in-out'))
]);
