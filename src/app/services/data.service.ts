import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any;

  constructor(private _http: HttpClient) {}

  
  async getData() {
    if (!this.data) {
      this.data = await firstValueFrom(this._http.get('https://gist.githubusercontent.com/Alwexis/126c8f8f90e29eae2d54f499f0d29f5e/raw/2afb2e82317bcc4393f57830d233cdd84d9c0cde/robotina_data.json'));
    }
    console.log(this.data)
    return this.data;
  }

}
