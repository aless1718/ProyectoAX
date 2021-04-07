import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  public rhombre: boolean = true;
  public rmujer: boolean = true;


  constructor() { }
  ngOnInit(): void { }


    fcheck() {
      if (document.getElementById("rmujer")?.onselect) {

        this.rmujer = true;

      } else {

        this.rmujer = false;

      }

    }

    mcheck() {
      if (document.getElementById("rhombre")?.onselect) {

        this.rhombre = true;

      } else {
        
        this.rhombre = false;

      }
    }
  


}
