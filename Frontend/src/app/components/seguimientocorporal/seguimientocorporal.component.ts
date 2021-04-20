
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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
  templateUrl: './seguimientocorporal.component.html',
  styleUrls: ['./seguimientocorporal.component.scss']
})
export class SeguimientocorporalComponent implements OnInit {

  @ViewChild("chart") chart: any;
  public chartOptions: Partial<any>;


  @ViewChild("inputFecha") inputFecha: any;
  @ViewChild("inputPeso") inputPeso: any;

  @ViewChild("inputCintura") inputCintura: any;
  @ViewChild("inputTorso") inputTorso: any;
  @ViewChild("inputBrazo") inputBrazo: any;
  @ViewChild("inputHombros") inputHombros: any;
  @ViewChild("inputPierna") inputPierna: any;

  public saved: boolean = false;
  public vistaAnadirRegistro: boolean = true;
  public vistaTodosRegistros: boolean = false;
  public registros: Register[] = [];
  public htmlToAdd: any;
  public nroPags: number = 0;
  public currentPage: number = 1;

  iconoBasura = faTrashAlt;


  constructor(public seguimiento: SeguimientoService, private auth: AuthService) { 
    this.chartOptions = {
      series: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Page Views",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: "Total Visits",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
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
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Page Statistics",
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
        labels: {
          trim: false
        },
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan"
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val: any) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val + " per session";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val;
              }
            }
          }
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
    this.seguimiento.deleteRegister(_id).then((res) => {
      console.log("Borrado");
      let index =  this.registros.findIndex((register) => register._id == _id)
      this.registros.splice(index, 1);
      this.countPages();
    });
  }


  public cambioVistaTodosRegistros() {

    let user_id = this.auth.getUser()._id as string;

    this.vistaAnadirRegistro = false;
    this.vistaTodosRegistros = true;
    this.seguimiento.getRegisters(user_id).then((res) => {

      this.registros = JSON.parse(JSON.stringify(res));
      this.countPages();
      this.registros.sort(function(a,b){return new Date(a.fecha).getTime() - new Date(b.fecha).getTime()});

      console.log(this.registros);

    });

  }

  public countPages(){

    let nroPagsTemp = this.registros.length/5;
    this.nroPags = nroPagsTemp % 1 == 0? nroPagsTemp : Math.floor(nroPagsTemp + 1);

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


  changePage(nroPags : number){
    this.currentPage = nroPags;

  }
}
