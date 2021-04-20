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
import { ReactiveFormsModule } from "@angular/forms";
import { AxpassComponent } from './components/axpass/axpass.component';
import { SeguimientocorporalComponent } from './components/seguimientocorporal/seguimientocorporal.component';
import { NgApexchartsModule } from "ng-apexcharts";



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
    SeguimientocorporalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
