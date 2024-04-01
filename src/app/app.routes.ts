import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./views/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mapa',
    loadComponent: () => import('./views/mapa/mapa.page').then( m => m.MapaPage)
  },
  {
    path: 'inscripcion',
    loadComponent: () => import('./views//inscripcion/inscripcion.page').then( m => m.InscripcionPage)
  },


];
