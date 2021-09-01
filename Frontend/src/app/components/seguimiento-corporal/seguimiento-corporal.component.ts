import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faArchive, faEdit, faTrashAlt  } from '@fortawesome/free-solid-svg-icons';
import { Register } from 'src/app/Models/Register';
import { AuthService } from 'src/app/services/auth.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import { User } from 'src/app/Models/User';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-seguimientocorporal',
  templateUrl: './seguimiento-corporal.component.html',
  styleUrls: ['./seguimiento-corporal.component.scss']
})
export class SeguimientocorporalComponent implements OnInit {

  @ViewChild("chart") chart: any;
  public chartOptions: Partial<any>;

  @ViewChild("chart2") chart2: any;
  public chartOptions2: Partial<any>;



  @ViewChild("inputFecha") inputFecha: any;
  @ViewChild("inputPeso") inputPeso: any;

  @ViewChild("inputCintura") inputCintura: any;
  @ViewChild("inputTorso") inputTorso: any;
  @ViewChild("inputBrazo") inputBrazo: any;
  @ViewChild("inputHombros") inputHombros: any;
  @ViewChild("inputPierna") inputPierna: any;

  public modalBorrar: boolean = false;
  public saved: boolean = false;
  public vistaAnadirRegistro: boolean = true;
  public vistaTodosRegistros: boolean = false;
  public registros: Register[] = [];
  public htmlToAdd: any;
  public nroPags: number = 0;
  public currentPage: number = 1;

  public pesoGrafica: number[] = [];
  public fechaGrafica: string[] = [];
  public imcGrafica: number[] = [];

  public brazoGrafica: number[] = [];
  public torsoGrafica: number[] = [];
  public piernaGrafica: number[] = [];
  public hombrosGrafica: number[] = [];
  public cinturaGrafica: number[] = [];


  iconoBasura = faTrashAlt;
  iconoEdit = faEdit;
  iconoRegistros = faArchive;

  constructor(public seguimiento: SeguimientoService, private auth: AuthService) {
    this.chartOptions = {
      series: [
        {
          name: "Peso",
          data: this.pesoGrafica
        },

        {
          name: "IMC",
          data: this.imcGrafica
        }

      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "smooth",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Mis estadísticas",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(val: any, opts: any) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        type: "string",
        categories: this.fechaGrafica
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val: any) {
                return val + " (kgs):";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val + ":";
              }
            }
          }

        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };






    this.chartOptions2 = {
      series: [
        {
          name: "Brazo",
          data: this.brazoGrafica
        },
        {
          name: "Pierna",
          data: this.pesoGrafica
        },
        {
          name: "Hombros",
          data: this.pesoGrafica
        },
        {
          name: "Torso",
          data: this.pesoGrafica
        },
        {
          name: "Cintura",
          data: this.imcGrafica
        }

      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "smooth",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Mis estadísticas",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(val: any, opts: any) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        type: "string",
        categories: this.fechaGrafica
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val: any) {
                return val + " (cms):";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val + " (cms):";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val + " (cms):";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val + " (cms):";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val + " (cms):";
              }
            }
          },


        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }


  ngOnInit(): void {
  }

  public saveRegister() {

    let user_id = this.auth.getUser()._id as string;

    let fecha = this.inputFecha.nativeElement.value;
    let peso = this.inputPeso.nativeElement.value;
    let cintura = this.inputCintura.nativeElement.value;
    let brazo = this.inputBrazo.nativeElement.value;
    let torso = this.inputTorso.nativeElement.value;
    let hombros = this.inputHombros.nativeElement.value;
    let pierna = this.inputPierna.nativeElement.value;

    let register = new Register(user_id, fecha, peso, cintura, torso, brazo, hombros, pierna);

    this.seguimiento.saveRegister(register).then((res) => {
      this.saved = true;
      console.log(res);

      setTimeout(() => {
        this.saved = false;
      }, 5000)
    }).catch((err) => {
      console.log(err);
    });

    this.inputFecha.nativeElement.value = null;
    this.inputPeso.nativeElement.value = null;
    this.inputCintura.nativeElement.value = null;
    this.inputBrazo.nativeElement.value = null;
    this.inputTorso.nativeElement.value = null;
    this.inputHombros.nativeElement.value = null;
    this.inputPierna.nativeElement.value = null;
  }

  public deleteRegister(_id: string | any){

    let user = this.auth.getUser();

    this.seguimiento.deleteRegister(_id).then((res) => {
      console.log("Borrado");
      let index =  this.registros.findIndex((register) => register._id == _id)
      this.registros.splice(index, 1);

      this.seguimiento.getNumPages(user._id).then((res) => {
      this.nroPags = res.nroPags;
      if(this.registros.length == 0)
      {
      this.currentPage = 1;

      this.getRegisters(user, this.currentPage - 1);
      }
    })
    });
  }


  public calculoIMC(peso: number, altura: number){

    altura = altura/100;
    altura = Math.pow(altura, 2);
    let imc = peso/altura;

    return Number.parseFloat(imc.toFixed(0));
  }


  public cambioVistaTodosRegistros() {

    let user = this.auth.getUser();

    this.vistaAnadirRegistro = false;
    this.vistaTodosRegistros = true;


    this.seguimiento.getNumPages(user._id as string).then((res) => {
      this.nroPags = res.nroPags;


      this.getRegisters(user, 0);

    })
  }


  public getRegisters(user: User, nroPag: number){
    this.seguimiento.getRegisters(user._id, nroPag).then((res) => {

      this.registros = JSON.parse(JSON.stringify(res));
      console.log(res);
      this.registros.forEach((registro: Register) => {

        this.pesoGrafica.push(registro.peso);
        this.brazoGrafica.push(registro.brazo);
        this.piernaGrafica.push(registro.pierna);
        this.cinturaGrafica.push(registro.cintura);
        this.hombrosGrafica.push(registro.hombros);
        this.torsoGrafica.push(registro.torso);
        this.imcGrafica.push(this.calculoIMC(registro.peso, Number.parseInt(user.height)));

        let fechaNueva = new Date(registro.fecha);

        this.fechaGrafica.push(`${fechaNueva.getUTCDate()}/${fechaNueva.getUTCMonth()}/${fechaNueva.getUTCFullYear()}`);

      });

    });
  }


  public cambioVistaNuevoRegistro() {
    this.vistaAnadirRegistro = true;
    this.vistaTodosRegistros = false;
  }


  public parseDate(fechaVieja: Date) {
    let fechaNueva = new Date(fechaVieja);

    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";


    var months = new Array(12);
    months[0] = "Enero";
    months[1] = "Febrero";
    months[2] = "Marzo";
    months[3] = "Abril";
    months[4] = "Mayo";
    months[5] = "Junio";
    months[6] = "Julio";
    months[7] = "Agosto";
    months[8] = "Septiembre";
    months[9] = "Octubre";
    months[10] = "Noviembvre";
    months[11] = "Diciembre";

    return `${weekday[fechaNueva.getDay()]}, ${fechaNueva.getUTCDate()} de ${months[fechaNueva.getUTCMonth()]} del ${fechaNueva.getFullYear()}`;
  }



  createRange(pages: number){
    var items: number[] = [];
    for(var i = 1; i <= pages; i++){
       items.push(i);
    }
    return items;
  }

  checkRegisterInPage(i : number){
    if(i < 5 && this.currentPage == 1){
      return true;
    }

    if(i >= (this.currentPage * 5) - 5 && i < this.currentPage * 5 && this.currentPage != 1){
      return true;
    }
    return false;

  }


  changePage(nroPag : number){
    let user = this.auth.getUser();

    this.currentPage = nroPag;
    this.getRegisters(user, (this.currentPage - 1));

  }
}
