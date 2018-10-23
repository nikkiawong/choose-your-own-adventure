import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterStartComponent }   from './character-start/character-start.component';
import { StartComponent }   from './start/start.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CharacterStartComponent
  },
  {
    path: 'start',
    component: StartComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
