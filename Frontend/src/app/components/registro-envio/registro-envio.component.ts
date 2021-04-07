import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


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



  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  
  datosEnvio(): void {

    let address = this.inputCalle.nativeElement.value + " " + this.inputPortal.nativeElement.value + ", Escalera " 
                + this.inputEscalera.nativeElement.value + ", Puerta " + this.inputPuerta.nativeElement.value + ", "
                + this.inputCodigoPostal.nativeElement.value + ", " + this.inputLocalidad.nativeElement.value;

    
    this.usersService.user.address = address;

    this.usersService.createUser();

    this.router.navigate(['registro-pago']);


  }
  test(): void {
    window.history.back();
  }
}
