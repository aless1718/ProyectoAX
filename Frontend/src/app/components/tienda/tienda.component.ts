import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  public rhombre: boolean = true;
  public rmujer: boolean = true;
  myFilter: any;
  initialPos: any;



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

  @HostListener('window: scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.myFunction();
  }


  ngAfterViewInit(): void {
    this.myFilter = document.getElementById("myFilter");
    this.initialPos = this.myFilter.offsetTop;
  }


  private myFunction() {
    
    let sticky = this.myFilter.offsetTop;

    if (window.pageYOffset < this.initialPos + 183) {
      this.myFilter.classList.remove("fixed-top");
    } else {
      this.myFilter.classList.add("fixed-top");
      console.log("hola");
    }

  }


}
