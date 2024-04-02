import { Component, Output, EventEmitter  } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent],
})

export class HomePage {
  constructor(private router: Router) {}

  opcionSeleccionada(opcion: string) {
    switch (opcion) {
      case 'mapa':
        this.router.navigate(['/mapa']); // Ruta a la página 'Mapa'
        break;
      case 'inscripcion':
        this.router.navigate(['/inscripcion']); // Ruta a la página 'Inscripcion'
        break;
      case 'eventos':
        this.router.navigate(['/eventos']); // Ruta a la página 'Eventos'
        break;
      case 'proyectos':
        this.router.navigate(['/proyectos']); // Ruta a la página 'Proyectos'
        break;
      default:
        break;
    }
  }
}
