import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserService } from 'src/app/services/registerUser.service';


@Component({
  selector: 'app-registro-envio',
  templateUrl: './registro-envio.component.html',
  styleUrls: ['./registro-envio.component.scss']
})
export class RegistroEnvioComponent implements OnInit {

  @ViewChild("inputLocalidad") inputLocalidad: any;
  @ViewChild("inputCodigoPostal") inputCodigoPostal: any;
  @ViewChild("inputCalle") inputCalle: any;
  @ViewChild("inputPortal") inputPortal: any;
  @ViewChild("inputEscalera") inputEscalera: any;
  @ViewChild("inputPuerta") inputPuerta: any;



  constructor(private RegisterUserService: RegisterUserService, private router: Router) { }

  ngOnInit(): void {
  }

  
  datosEnvio(): void {

    let address = this.inputCalle.nativeElement.value + " " + this.inputPortal.nativeElement.value + ", Escalera " 
                + this.inputEscalera.nativeElement.value + ", Puerta " + this.inputPuerta.nativeElement.value + ", "
                + this.inputCodigoPostal.nativeElement.value + ", " + this.inputLocalidad.nativeElement.value;

    
    this.RegisterUserService.user.address = address;

    this.RegisterUserService.user.city = this.inputLocalidad.nativeElement.value;
    this.RegisterUserService.user.street = this.inputCalle.nativeElement.value;
    this.RegisterUserService.user.portal = this.inputPortal.nativeElement.value;
    this.RegisterUserService.user.stair = this.inputEscalera.nativeElement.value;
    this.RegisterUserService.user.door = this.inputPuerta.nativeElement.value;
    this.RegisterUserService.user.PostalCode = this.inputCodigoPostal.nativeElement.value;


    this.RegisterUserService.createUser();

    this.router.navigate(['registro-pago']);


  }
  test(): void {
    window.history.back();
  }
}
