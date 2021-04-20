import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Models/User';
import  jwt_decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  public islogged: boolean = false;
  AUTH_SERVER: string = 'http://localhost:3000';
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
            const decodeJWT: any = jwt_decode(res);

            this.islogged = true;
            this.saveUser(decodeJWT._doc as User);
            //guardar token
            this.saveToken(res);
            return res;
          }
        }).catch((reason: any ) => {
          throw new Error(reason);
        })
      
  }

  private saveUser(user: User): void{
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getUser(): User{
    return JSON.parse(localStorage.getItem("user") as string);
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
    
      return localStorage.getItem("ACCESS_TOKEN");
    
  }

  updateUser(user: any): Promise<any> {

    const header = new HttpHeaders({
      'Content-Type': `application/json`,
      'Authorization': `Bearer ${this.getToken()}`
  });


    return this.httpClient.put<any>(`${this.AUTH_SERVER}/users`, user, {headers: header}).toPromise().then( 
        (res: any) => {
          if (res) {
            this.setUser(res);
            return res;
          }
        }).catch((reason: any ) => {
          throw new Error(reason);
        }) 
  }

  setUser(user: User): void{
    localStorage.setItem('user', JSON.stringify(user));
  }
}





//crypto-js