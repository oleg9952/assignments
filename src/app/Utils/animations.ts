import { trigger, state, transition, animate, style } from '@angular/animations';

export const numberItem =
    trigger('popUp', [
        state('void', style({
            transform: 'scale(0)'
        })),
        transition(':enter', [
            animate(300, style({
                transform: 'scale(1)'
            }))
            
        ])
    ]);