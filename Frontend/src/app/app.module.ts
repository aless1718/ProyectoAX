import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './components/mainview/mainview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './auth/login/login.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { PantalonesComponent } from './components/pantalones/pantalones.component';
import { DatospersonalesComponent } from './components/datospersonales/datospersonales.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroEnvioComponent } from './components/registro-envio/registro-envio.component';
import { RegistroPagoComponent } from './components/registro-pago/registro-pago.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AxpassComponent } from './components/axpass/axpass.component';
import { CreadorrutinasComponent } from './components/creadorrutinas/creadorrutinas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule} from '@angular/material/slider';
import { SeguimientocorporalComponent } from './components/seguimiento-corporal/seguimiento-corporal.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [

    AppComponent,
    MainviewComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CamisetasComponent,
    RutasComponent,
    TiendaComponent,
    PantalonesComponent,
    DatospersonalesComponent,
    SearchbarComponent,
    RegistroComponent,
    RegistroEnvioComponent,
    RegistroPagoComponent,
    AxpassComponent,
    CreadorrutinasComponent,
    SeguimientocorporalComponent,
    LoginFormComponent,

    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    ChartsModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSliderModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
