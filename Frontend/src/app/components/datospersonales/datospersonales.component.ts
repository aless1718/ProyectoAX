import { Component, OnInit, ViewChild } from '@angular/core';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.scss']
})
export class DatospersonalesComponent implements OnInit {

  @ViewChild("inputName") inputName: any;
  @ViewChild("inputLastname") inputLastname: any;
  @ViewChild("inputEmail") inputEmail: any;
  @ViewChild("inputAge") inputAge: any;
  @ViewChild("inputPhone") inputPhone: any;
  @ViewChild("inputPassword") inputPassword: any;

  @ViewChild("inputLocalidad") inputLocalidad: any;
  @ViewChild("inputCalle") inputCalle: any;
  @ViewChild("inputPortal") inputPortal: any;
  @ViewChild("inputEscalera") inputEscalera: any;
  @ViewChild("inputPuerta") inputPuerta: any;
  @ViewChild("inputCP") inputCP: any;

  @ViewChild("inputTitularTarjeta") inputTitularTarjeta: any;
  @ViewChild("inputNroTarjeta") inputNroTarjeta: any;
  @ViewChild("inputCVV") inputCVV: any;
  @ViewChild("inputValidez") inputValidez: any;

  closedLock = faLock;
  openedLock = faLockOpen;


  public disabledPI: boolean = true;
  public disabledE: boolean = true;
  public disabledDB: boolean = true;



  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // UTILIZAMOS ESTA FUNCIÓN PORQUE HAY QUE ESPERAR A QUE CARGUE TODA LA VISTA DEL HTML
  ngAfterViewInit(): void {

    let user = this.authService.getUser();

    this.inputName.nativeElement.value = user.name;
    this.inputAge.nativeElement.value  = user.age;
    this.inputLastname.nativeElement.value = user.lastname;
    this.inputPassword.nativeElement.value = user.password;
    this.inputEmail.nativeElement.value = user.email;
    this.inputPhone.nativeElement.value = user.phone;

    this.inputLocalidad.nativeElement.value = user.city;
    this.inputCalle.nativeElement.value  = user.street;
    this.inputPortal.nativeElement.value = user.portal;
    this.inputEscalera.nativeElement.value = user.stair;
    this.inputPuerta.nativeElement.value = user.door;
    this.inputCP.nativeElement.value = user.PostalCode;

    this.inputTitularTarjeta.nativeElement.value = user.tarjet_name;
    this.inputNroTarjeta.nativeElement.value  = user.tarjet_number;
    this.inputCVV.nativeElement.value = user.tarjet_cvv;
    this.inputValidez.nativeElement.value = user.tarjet_dataexp;

    console.log(user);
  }

  datos(): void {
  
    this.inputAge.nativeElement.value;
    this.inputLastname.nativeElement.value;
    this.inputPassword.nativeElement.value;
    this.inputName.nativeElement.value;
    this.inputEmail.nativeElement.value;
    this.inputPhone.nativeElement.value;

    this.inputLocalidad.nativeElement.value;
    this.inputCalle.nativeElement.value;
    this.inputPortal.nativeElement.value;
    this.inputEscalera.nativeElement.value; 
    this.inputPuerta.nativeElement.value;
    this.inputCP.nativeElement.value;

    this.inputTitularTarjeta.nativeElement.value;
    this.inputNroTarjeta.nativeElement.value;
    this.inputCVV.nativeElement.value;
    this.inputValidez.nativeElement.value;

  }




  /* INPUTS PERSONALES */
  public enablePersonalInputs(): void{
    this.disabledPI = false;
  }

  public disablePersonalInputs(): void {
    this.disabledPI = true;

    let user = new User();

    user.name = this.inputName.nativeElement.value;
    user.age = this.inputAge.nativeElement.value;
    user.lastname = this.inputLastname.nativeElement.value;
    user.password = this.inputPassword.nativeElement.value;
    user.email = this.inputEmail.nativeElement.value;
    user.phone = this.inputPhone.nativeElement.value;

    user.city = this.inputLocalidad.nativeElement.value;
    user.street = this.inputCalle.nativeElement.value;
    user.portal = this.inputPortal.nativeElement.value;
    user.stair = this.inputEscalera.nativeElement.value;
    user.door = this.inputPuerta.nativeElement.value;
    user.PostalCode = this.inputCP.nativeElement.value;


    user.tarjet_name = this.inputTitularTarjeta.nativeElement.value;
    user.tarjet_number = this.inputNroTarjeta.nativeElement.value;
    user.tarjet_cvv = this.inputCVV.nativeElement.value;
    user.tarjet_dataexp = this.inputValidez.nativeElement.value;

    user._id = this.authService.getUser()._id;

    this.authService.updateUser(user).then((value) => {

    });
  }


  /* INPUTS ENVÍO */

  public enableSendInputs(): void{
    this.disabledE = false;
  }

  public disableSendInputs(): void {
    this.disabledE = true;

    let user = new User();

    user.name = this.inputName.nativeElement.value;
    user.age = this.inputAge.nativeElement.value;
    user.lastname = this.inputLastname.nativeElement.value;
    user.password = this.inputPassword.nativeElement.value;
    user.email = this.inputEmail.nativeElement.value;
    user.phone = this.inputPhone.nativeElement.value;

    user.city = this.inputLocalidad.nativeElement.value;
    user.street = this.inputCalle.nativeElement.value;
    user.portal = this.inputPortal.nativeElement.value;
    user.stair = this.inputEscalera.nativeElement.value;
    user.door = this.inputPuerta.nativeElement.value;
    user.PostalCode = this.inputCP.nativeElement.value;

    
    user.tarjet_name = this.inputTitularTarjeta.nativeElement.value;
    user.tarjet_number = this.inputNroTarjeta.nativeElement.value;
    user.tarjet_cvv = this.inputCVV.nativeElement.value;
    user.tarjet_dataexp = this.inputValidez.nativeElement.value;

    user._id = this.authService.getUser()._id;

    this.authService.updateUser(user).then((value) => {

    });
  }



  /* INPUTS BANCO */

  public enableBankInputs(): void{
    this.disabledDB = false;
  }

  public disableBankInputs(): void {
    this.disabledDB = true;

    let user = new User();

    user.name = this.inputName.nativeElement.value;
    user.age = this.inputAge.nativeElement.value;
    user.lastname = this.inputLastname.nativeElement.value;
    user.password = this.inputPassword.nativeElement.value;
    user.email = this.inputEmail.nativeElement.value;
    user.phone = this.inputPhone.nativeElement.value;

    user.city = this.inputLocalidad.nativeElement.value;
    user.street = this.inputCalle.nativeElement.value;
    user.portal = this.inputPortal.nativeElement.value;
    user.stair = this.inputEscalera.nativeElement.value;
    user.door = this.inputPuerta.nativeElement.value;
    user.PostalCode = this.inputCP.nativeElement.value;

    user.tarjet_name = this.inputTitularTarjeta.nativeElement.value;
    user.tarjet_number = this.inputNroTarjeta.nativeElement.value;
    user.tarjet_cvv = this.inputCVV.nativeElement.value;
    user.tarjet_dataexp = this.inputValidez.nativeElement.value;


    user._id = this.authService.getUser()._id;

    this.authService.updateUser(user).then((value) => {

    });
  }
}
