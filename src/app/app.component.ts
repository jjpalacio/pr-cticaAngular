import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo3';
  valor1:boolean = false;
  valor2:boolean = true;
  diasemana:String = '';
  color:String = '';
  ind:any;

  libros:Array<any>;
  elementos:Array<any>;

  constructor(){
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

}
