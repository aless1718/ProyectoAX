import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  public user: User;

  private apiUrl: string = "http://192.168.1.172:3000/users";

  constructor( private http: HttpClient ) 
  {
    this.user = new User;   
  }

  public createUser(): void
  {
    
    console.log(this.user);
    delete this.user._id;
    this.http.post( this.apiUrl, this.user ).subscribe( (newUser) => {

      console.log(newUser);
      
    }, (error) => {
      throw new Error(error);
    });
  }
}
