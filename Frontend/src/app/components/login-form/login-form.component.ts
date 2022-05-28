import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder, public seguimiento: SeguimientoService) { 
    this.seguimiento = seguimiento;
  }

  @ViewChild('closeModal') closeModal: any;

  
  public logueoCorrecto: boolean = true;
  public modal: boolean = true;
  public isLogged: boolean = false;

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
