import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule , NavController} from '@ionic/angular';
import { RouterLink, RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { qrCodeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterOutlet]
})
export class MapaPage {

  constructor(private navCtrl: NavController) {
    addIcons({ qrCodeOutline })
  }

  togglePopUp() {
    document.querySelector('#popup')?.classList.toggle('hidden');
    document.querySelector('#popup')?.classList.toggle('flex');
  }

}
