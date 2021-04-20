import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserService } from 'src/app/services/registerUser.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @ViewChild("inputName") inputName: any;
  @ViewChild("inputLastname") inputLastname: any;
  @ViewChild("inputEmail") inputEmail: any;
  @ViewChild("inputPhone") inputPhone: any;
  @ViewChild("inputPassword") inputPassword: any;
  @ViewChild("inputConfirmpassword") inputConfirmpassword: any;
  @ViewChild("inputBirthday") inputBirthday: any;
  @ViewChild("inputHeight") inputHeight: any;
  @ViewChild("inputWeight") inputWeight: any;


  constructor(private RegistroUserService: RegisterUserService, private router: Router) { }

  ngOnInit(): void {
  }
  faArrow = faArrowRight;

  datos(): void {
    
    this.RegistroUserService.user.age = this.inputBirthday.nativeElement.value;
    this.RegistroUserService.user.lastname = this.inputLastname.nativeElement.value;
    this.RegistroUserService.user.password = this.inputPassword.nativeElement.value;
    this.RegistroUserService.user.weight = this.inputWeight.nativeElement.value;
    this.RegistroUserService.user.height = this.inputHeight.nativeElement.value;
    this.RegistroUserService.user.name = this.inputName.nativeElement.value;
    this.RegistroUserService.user.email = this.inputEmail.nativeElement.value;
    this.RegistroUserService.user.phone = this.inputPhone.nativeElement.value;

    console.log(this.RegistroUserService.user);
    this.router.navigate(['registro-envio']);

  }
}
