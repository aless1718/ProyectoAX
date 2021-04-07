import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { JwtResponse } from '../auth/jwt-response';
import { User } from '../Models/User';

import  jwt_decode  from 'jwt-decode';
import { r3JitTypeSourceSpan } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  public islogged: boolean = false;
  AUTH_SERVER: string = 'http://192.168.1.141:3000';
  authSubject = new BehaviorSubject(false);
  private token: string | null = '';

  constructor(private httpClient: HttpClient) {
    if(localStorage.getItem('ACCESS_TOKEN')){
      this.islogged = true;
    } else {
      this.islogged = false;

    }
   }

  login(user: any): Promise<any> {
    return this.httpClient.post<any>(`${this.AUTH_SERVER}/auth`,
      user).toPromise().then( 
        (res: any) => {
          if (res) {
            const hola = jwt_decode(res);
            console.log(hola);

            this.islogged = true;
            //guardar token
            this.saveToken(res);
            return res;
          }
        }).catch((reason: any ) => {
          throw new Error(reason);
        })
      
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRE_IN");
    this.islogged = false;

  }

  private saveToken(token: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    this.token = token;
  }

  private getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
