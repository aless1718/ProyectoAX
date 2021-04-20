import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../Models/Register';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

  SERVER: string = 'http://192.168.1.143:3000';

  public registers: Register[] = [];

  constructor(private httpClient: HttpClient) { }

  private getToken(): string | null {

    return localStorage.getItem("ACCESS_TOKEN");
  }

  public getRegisters(user_id: string): Promise<any> {

    const header = new HttpHeaders({
      'Content-Type': `application/json`,
      'Authorization': `Bearer ${this.getToken()}`
    });

    return this.httpClient.get<any>(`${this.SERVER}/registers/` + user_id, { headers: header }).toPromise().then(
      (res: any) => {
        if (res) {
          this.registers = res;
          return res;
        }

      })
  }

  public deleteRegister(_id: string): Promise<any> {

    const header = new HttpHeaders({
      'Content-Type': `application/json`,
      'Authorization': `Bearer ${this.getToken()}`
    });

    return this.httpClient.delete<any>(`${this.SERVER}/registers/` + _id, { headers: header }).toPromise().then(
      (res: any) => {
        if (res) {
          this.registers = res;
          return res;
        }

      })
  }


  public saveRegister(register: Register): Promise<any> {

    const header = new HttpHeaders({
      'Content-Type': `application/json`,
      'Authorization': `Bearer ${this.getToken()}`
    });

    return this.httpClient.post<any>(`${this.SERVER}/registers`, register, { headers: header }).toPromise();

  }
}
