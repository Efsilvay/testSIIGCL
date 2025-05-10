import { Routes } from '@angular/router';

import { PersonajesComponent } from './features/components/personajes/personajes.component';
import { EditarComponent } from './features/components/editar/editar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'personajes', pathMatch: 'full' },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'editar', component: EditarComponent },
  { path: '**', component: PersonajesComponent },
  
];