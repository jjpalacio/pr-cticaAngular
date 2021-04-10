import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosSeleccionadosService {

  libros:Array<any>;

  constructor() { 

    this.libros=[];

  }

  agregraLibros(nuevo_libro:any){
    this.libros.push(nuevo_libro);
  }

  mostrarLibros(){
    if(this.libros.length > 0)
        {return this.libros;}
    else
        {return false;}
  }

}
