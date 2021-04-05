import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  libros:Array<any>;
  elementos:Array<any>;
  

  constructor( ){
    this.libros = [
      {id:'1', titulo:'El libro tibetano de la vida y la muerte', autor:'pranapana'},
      {id:'2', titulo:'El libro tibetano de la vida y la ', autor:'pranapana1'},
      {id:'3', titulo:'El libro tibetano de la vida', autor:'pranapana2'},
      {id:'4', titulo:'El libro tibetano de la', autor:'pranapana3'},
    ];
    this.elementos = [
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

  mostrar (elem:any) {
    alert (` ${elem.titulo} fue escrito por: ${elem.autor} `);
  }

  ngOnInit(): void {
    
  }

}
