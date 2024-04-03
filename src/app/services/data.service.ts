import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data: any;

  constructor(private _http: HttpClient) {}

  
  async getData() {
    if (!this._data) {
      this._data = await firstValueFrom(this._http.get('https://gist.githubusercontent.com/Alwexis/126c8f8f90e29eae2d54f499f0d29f5e/raw/2afb2e82317bcc4393f57830d233cdd84d9c0cde/robotina_data.json'));
    }
    return this._data;
  }

}
