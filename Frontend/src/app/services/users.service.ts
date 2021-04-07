import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: User;

  private apiUrl: string = "http://localhost:3000/users";

  constructor( private http: HttpClient ) 
  {
    this.user = new User;   
  }

  public createUser(): void
  {
    console.log(this.user);
    this.http.post( this.apiUrl, this.user ).subscribe( (newUser) => {

      console.log(newUser);
      
    }, (error) => {
      throw new Error(error);
    });
  }
}
