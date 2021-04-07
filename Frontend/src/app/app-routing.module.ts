import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewComponent } from './components/mainview/mainview.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { DatospersonalesComponent } from './components/datospersonales/datospersonales.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroEnvioComponent } from './components/registro-envio/registro-envio.component';
import { RegistroPagoComponent } from './components/registro-pago/registro-pago.component';
import { AxpassComponent } from './components/axpass/axpass.component';
import { SeguimientocorporalComponent } from './components/seguimientocorporal/seguimientocorporal.component';

const routes: Routes = [
                        {path: '', component: MainviewComponent},
                        {path: 'tienda', component: TiendaComponent},
                        {path: 'datospersonales', component: DatospersonalesComponent},
                        {path: 'registro', component: RegistroComponent},
                        {path: 'registro-envio', component: RegistroEnvioComponent},
                        {path: 'registro-pago', component: RegistroPagoComponent},
                        {path: 'axpass', component: AxpassComponent},
                        {path: 'seguimientocorporal', component: SeguimientocorporalComponent},
                        {path: '', redirectTo: '/auth', pathMatch: 'full'},
                        {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
                      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
