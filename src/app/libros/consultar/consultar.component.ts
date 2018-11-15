import { Component, OnInit } from '@angular/core';
import { ServicioLibrosService } from 'src/app/servicio/servicio-libros.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  servicioLibros: ServicioLibrosService;
  constructor(unServicioLibros: ServicioLibrosService) { 
    this.servicioLibros = unServicioLibros;
  }

  ngOnInit() {
  }

}
