import { Component, OnInit } from '@angular/core';
import { TiendaComponent } from '../tienda/tienda.component';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.scss']
})
export class CamisetasComponent implements OnInit {

  constructor( public tienda: TiendaComponent ) {  }

  ngOnInit(): void {
  }

}
