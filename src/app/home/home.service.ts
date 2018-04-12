import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {
  }

  public getContacts(): Observable<any> {
    const apiUrl = 'https://backend-everis.herokuapp.com/api/guardar-proyect';
    return this.http.get(apiUrl)
      .map((res) => {
        return res;
      });
  }
} 
