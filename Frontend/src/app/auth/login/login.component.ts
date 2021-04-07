import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public showCarrito: boolean = false;


  constructor( public authService: AuthService ) { 

  }

  ngOnInit(): void {
  }



}
