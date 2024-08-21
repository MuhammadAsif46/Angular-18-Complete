import { Routes } from '@angular/router';

import { IfelseComponent } from '../components/ifelse/ifelse.component';
import { ForComponent } from '../components/for/for.component';

export const routes: Routes = [
  // create all Routes:

  // ifelse route:
  {
    path: 'ifelse', // Mandatory
    component: IfelseComponent, // Mandatory
  },
  // for route:
  {
    path: 'for', // Mandatory
    component: ForComponent, // Mandatory
  },
];
