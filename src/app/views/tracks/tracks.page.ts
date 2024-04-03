import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TracksPage implements OnInit {

  data: any;
  keys: string[] = [];

  constructor(private _data: DataService) { }

  async ngOnInit() {
    this.data = await this._data.getData();
    this.keys = Object.keys(this.data);
  }

}
