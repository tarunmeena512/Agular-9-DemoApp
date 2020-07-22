import { trigger,state, transition, animate, style } from '@angular/animations';
  //fadeIn
 export let fade= trigger('fadeIn',[

    state('void',style({
     background: 'yellow',
     opacity:0
    })),

    transition(':enter',[
      animate(2000)
    ]),

   ])

   export let slideInOut =  trigger('slideInOut', [
    state('void',style({
        transform: 'scale(20)',
        opacity:0
       })),       
    transition(':enter', [
      animate(2000)
    ]),
    transition(':leave', [
     animate(2000)
    ])

  ])