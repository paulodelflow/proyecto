import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterOutlet, RouterLink]
})
export class InscripcionPage {

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // Esta función navegará hacia atrás en el stack de navegación
  }
}
