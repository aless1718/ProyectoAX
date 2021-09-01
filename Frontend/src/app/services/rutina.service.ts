import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rutina } from '../Models/Rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  constructor(private httpClient: HttpClient) { }

  

  SERVER: string = 'http://192.168.1.137:3000';
  public rutinas: Rutina[] = [];



  private getToken(): string | null {

    return localStorage.getItem("ACCESS_TOKEN");
  }


  public saveRutinas(rutinas: Rutina): Promise<any> {

    const header = new HttpHeaders({
      'Content-Type': `application/json`,
      'Authorization': `Bearer ${this.getToken()}`
    });

    return this.httpClient.post<any>(`${this.SERVER}/creadorrutinas`, rutinas, { headers: header }).toPromise();

  }
}
