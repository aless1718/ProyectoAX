import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Rutina } from 'src/app/Models/Rutina';
import { AuthService } from 'src/app/services/auth.service';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-creadorrutinas',
  templateUrl: './creadorrutinas.component.html',
  styleUrls: ['./creadorrutinas.component.scss']
})
export class CreadorrutinasComponent implements OnInit {

  public musculos = ['Cuerpo completo','Pectoral', 'Deltoides', 'Tríceps', 'Cuádriceps'];
  public rutina = ['Fuerza', 'Hipertrofia', 'Resistencia', 'HIIT', 'Cardiovascular', 'Flexibilidad', 'Mobilidad', 'Progresión'];
  public saved: boolean = false;

  @ViewChild("inputMusculos") inputMusculos: any;
  @ViewChild("inputTipoRutina") inputTipoRutina: any;
  @ViewChild("inputMaterial") inputMaterial: any;
  @ViewChild("inputDuracion") inputDuracion: any;
  @ViewChild("inputNivel") inputNivel: any;
  @ViewChild("inputNroejers") inputNroejers: any;
  @ViewChild("inputSeries") inputSeries: any;
  @ViewChild("inputRepes") inputRepes: any;
  @ViewChild("inputFecha") inputFecha: any;
  @ViewChild("inputDescripcion") inputDescripcion: any;


  constructor(public rutinaService: RutinaService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  anadir = faPlus;


  public saveRutinas() {

    console.log('rutinas');

    let user_id = this.authService.getUser()._id as string;

    let musculos = this.inputMusculos.nativeElement.value;
    let tipoRutina = this.inputTipoRutina.nativeElement.value;
    let material = this.inputMaterial.nativeElement.value;
    let duracion = this.inputDuracion.nativeElement.value;
    let nivel = this.inputNivel.nativeElement.value;
    let nroejers = this.inputNroejers.nativeElement.value;
    let series = this.inputSeries.nativeElement.value;
    let repes = this.inputRepes.nativeElement.value;
    let descripcion = this.inputDescripcion.nativeElement.value;
    let fecha = this.inputFecha.nativeElement.value;


    let rutinas = new Rutina(user_id, fecha, musculos, tipoRutina, material, duracion, nivel, nroejers, series, repes, descripcion);

    this.rutinaService.saveRutinas(rutinas).then((res) => {
      this.saved = true;
      console.log(res);

      setTimeout(() => {
        this.saved = false;
      }, 5000)
    }).catch((err) => {
      console.log(err);
    });

    this.inputMusculos.nativeElement.value = null;
    this.inputTipoRutina.nativeElement.value = null;
    this.inputMaterial.nativeElement.value = null;
    this.inputDuracion.nativeElement.value = null;
    this.inputNivel.nativeElement.value = null;
    this.inputNroejers.nativeElement.value = null;
    this.inputSeries.nativeElement.value = null;
    this.inputRepes.nativeElement.value = null;
    this.inputDescripcion.nativeElement.value = null;
  
  
  
  }

}
