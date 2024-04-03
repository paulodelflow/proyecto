import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TrackPage implements OnInit {

  private _trackId: string = '';
  data: any;
  loaded: boolean = false;

  constructor(private _route: ActivatedRoute, private _dataSrv: DataService) {
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
}
