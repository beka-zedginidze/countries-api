import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all?fbclid=IwAR05kcITrH7U8xJgfxOMwX6tXABacoEDCcYjm28pBb-jdT7SPKNrMNWi4FE')
  }
}

