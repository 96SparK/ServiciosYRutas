import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/modelos/libro';
import { ServicioLibrosService } from 'src/app/servicio/servicio-libros.service';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  libro: Libro;
  servicioLibros: ServicioLibrosService;

  constructor(unServicioLibros: ServicioLibrosService) { 
    this.libro = new Libro();
    this.servicioLibros = unServicioLibros;
  }

  ngOnInit() {
  }

  agregar(){
    console.log(this.libro);
    this.servicioLibros.agregar(this.libro);
    this.libro = new Libro();
  }

}
