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
  @Output() opcionSeleccionada = new EventEmitter<number>();

  constructor() {}

  emitirOpcionSeleccionada(opcion: number) {
    this.opcionSeleccionada.emit(opcion);
  }
}
