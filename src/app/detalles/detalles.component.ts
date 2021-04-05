import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  listaLibros:Array<any>;
  libroId:number=0;
  libroseleccionado:any;

  constructor(private ruta:ActivatedRoute) { 

    this.listaLibros = [
      {id:'1', titulo:'El libro tibetano de la vida y la muerte', autor:'pranapana'},
      {id:'2', titulo:'El libro tibetano de la vida y la ', autor:'pranapana1'},
      {id:'3', titulo:'El libro tibetano de la vida', autor:'pranapana2'},
      {id:'4', titulo:'El libro tibetano de la', autor:'pranapana3'},
      {id:'5', titulo:'El elemento', autor:'pranapana4'},
      {id:'6', titulo:'El elemento perdido ', autor:'pranapana5'},
      {id:'7', titulo:'El libro de la soledad', autor:'pranapana6'},
      {id:'8', titulo:'El libro del amor', autor:'pranapana7'},
    ]

  }

  ngOnInit(): void {
    this.ruta.params.subscribe( params => {
      this.libroId = params['libroId'];
      this.libroseleccionado = this.encontrarLibro();
    });
  }

  encontrarLibro() {
    return this.listaLibros.filter( this.filtroXId, this.libroId)[0];
  }

  filtroXId(listaLibros:any){
    return listaLibros.id == this;
  }

}
