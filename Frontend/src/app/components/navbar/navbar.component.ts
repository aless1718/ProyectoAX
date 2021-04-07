import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('closeModal') closeModal: any;

  public showCuadroCarrito: boolean = false;
  public logueoCorrecto: boolean = true;
  public modal: boolean = true;
  public isLogged: boolean = false;


  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) { }

  faShopify = faShopify;
  faCarrito = faShoppingCart;

  public profileForm: any;
  public submitted: boolean = false;

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });

  }


  onLogin(): void {

    this.submitted = true;
    if (this.profileForm.valid) {

      let user = { email: this.profileForm.get('email').value, password: this.profileForm.get('password').value };
      console.log(user);
      this.authService.login(user).then(res => {
        this.logueoCorrecto = true;
        this.closeModal.nativeElement.click();
      }).catch((err: any) => {
        this.logueoCorrecto = false;
       
      })

    }
  }


  
}