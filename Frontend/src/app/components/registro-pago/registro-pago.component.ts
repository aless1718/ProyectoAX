import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-pago',
  templateUrl: './registro-pago.component.html',
  styleUrls: ['./registro-pago.component.scss']
})
export class RegistroPagoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(): void {
    window.history.back();
  }
}
