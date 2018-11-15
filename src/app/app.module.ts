import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearComponent } from './libros/crear/crear.component';
import { ConsultarComponent } from './libros/consultar/consultar.component';
import { AppRutas } from './app.rutas';
import { DetallesComponent } from './libros/detalles/detalles.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CrearComponent,
    ConsultarComponent,
    DetallesComponent,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
