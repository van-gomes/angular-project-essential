import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = {
    title: '',
    icon: '',
    routeUrl: ''
  };

  get headerData() {
    return this._headerData;
  }

  set headerData(data: { title: string; icon: string; routeUrl: string }) {
    this._headerData = data;
  }
}