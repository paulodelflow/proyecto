import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, chevronDownOutline }  from 'ionicons/icons';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterOutlet, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrackPage implements OnInit {

  @ViewChild('Swiper') swiper!: ElementRef<SwiperContainer>;
  private _trackId: string = '';
  data: any;
  loaded: boolean = false;

  constructor(private _route: ActivatedRoute, private _dataSrv: DataService) {
    addIcons({ chevronForwardOutline, chevronDownOutline })
    this._route.params.subscribe(p => {
      this._trackId = p['id'];
    })
  }

  async ngOnInit() {
    const _rawData = await this._dataSrv.getData()
    this.data = _rawData[this._trackId]
    console.log(this.data)
    this.loaded = true;
  }

  expand(e: any) {
    let parent = e.target.parentElement;
    while (!parent.classList.contains('group')) {
      parent = parent.parentElement;
    }
    parent.setAttribute('aria-expanded', parent.getAttribute('aria-expanded') == 'true' ? 'false' : 'true');
    let icon = parent.querySelector('ion-icon');
    icon.setAttribute('name', icon.getAttribute('name') == 'chevron-down-outline' ? 'chevron-forward-outline' : 'chevron-down-outline');
  }
}
