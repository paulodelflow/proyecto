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
    path: 'inscripcion',
    loadComponent: () => import('./views/inscripcion/inscripcion.page').then( m => m.InscripcionPage)
  },
  {
    path: 'tracks',
    loadComponent: () => import('./views/tracks/tracks.page').then( m => m.TracksPage)
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./views/proyectos/proyectos.page').then( m => m.ProyectosPage)
  },
  {
    path: 'eventos',
    loadComponent: () => import('./views/eventos/eventos.page').then( m => m.EventosPage)
  },
  {
    path: 'mapa',
    loadComponent: () => import('./views/mapa/mapa.page').then( m => m.MapaPage)
  },
  {
    path: 'evento',
    loadComponent: () => import('./views/evento/evento.page').then( m => m.EventoPage)
  },
  {
    path: 'track',
    loadComponent: () => import('./views/track/track.page').then( m => m.TrackPage)
  },

];
