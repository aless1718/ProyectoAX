import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @ViewChild("inputName") inputName: any;
  @ViewChild("inputLastname") inputLastname: any;
  @ViewChild("inputSurname") inputSurname: any;
  @ViewChild("inputEmail") inputEmail: any;
  @ViewChild("inputPhone") inputPhone: any;
  @ViewChild("inputPassword") inputPassword: any;
  @ViewChild("inputConfirmpassword") inputConfirmpassword: any;
  @ViewChild("inputBirthday") inputBirthday: any;
  @ViewChild("inputHeight") inputHeight: any;
  @ViewChild("inputWeight") inputWeight: any;


  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  faArrow = faArrowRight;

  datos(): void {
    
    this.usersService.user.age = this.inputBirthday.nativeElement.value;
    this.usersService.user.lastname = this.inputLastname.nativeElement.value;
    this.usersService.user.password = this.inputPassword.nativeElement.value;
    this.usersService.user.surname = this.inputSurname.nativeElement.value;
    this.usersService.user.weight = this.inputWeight.nativeElement.value;
    this.usersService.user.height = this.inputHeight.nativeElement.value;
    this.usersService.user.name = this.inputName.nativeElement.value;
    this.usersService.user.email = this.inputEmail.nativeElement.value;
    this.usersService.user.phone = this.inputPhone.nativeElement.value;

    console.log(this.usersService.user);
    this.router.navigate(['registro-envio']);

  }
}
