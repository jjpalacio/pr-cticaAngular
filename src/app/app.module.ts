import { Route, RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColoresComponent } from './colores/colores.component';
import { SaludoComponent } from './saludo/saludo.component';

import { FormsModule } from '@angular/forms';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { DetallesComponent } from './detalles/detalles.component';

import { LibrosSeleccionadosService } from './libros-seleccionados.service';

const rutasApp:Routes = [
  {path: 'lista-libros', component: ListaDeLibrosComponent },
  {path: 'Acerca-de', component: AcercaDeComponent },
  {path: 'Detalles', redirectTo: 'lista-libros' },
  {path: 'Detalles/:libroId', component: DetallesComponent },
  {path: '404', component: Error404Component },
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '404', }
]

@NgModule({
  declarations: [
    AppComponent,
    ColoresComponent,
    SaludoComponent,
    AcercaDeComponent,
    EncabezadoComponent,
    ListaDeLibrosComponent,
    InicioComponent,
    Error404Component,
    DetallesComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LibrosSeleccionadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
