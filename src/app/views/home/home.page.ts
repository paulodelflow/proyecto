import { Component, Output, EventEmitter  } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent],
})

export class HomePage {
  constructor() {}
  hola = true;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  @Output() opcionSeleccionada = new EventEmitter<number>();

  emitirOpcionSeleccionada(opcion: number) {
    this.opcionSeleccionada.emit(opcion);
  }
}
