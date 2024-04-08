import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data: any;
  private _dataURL = 'https://gist.githubusercontent.com/Alwexis/126c8f8f90e29eae2d54f499f0d29f5e/raw/843fbe7d2e26a9822d384b041fcfa154f0a73c19/robotina_data.json';

  constructor(private _http: HttpClient) {}
  
  async getData() {
    if (!this._data) {
      this._data = await firstValueFrom(this._http.get(this._dataURL));
    }
    return this._data;
  }

}
