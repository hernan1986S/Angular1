import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

import { DirectivasComponent } from './components/directivas/directivas.component';
import { FooterComponent } from './components/footer/footer.component';

import { ContactoComponent } from './components/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    ContenidoComponent,

    DirectivasComponent,
    FooterComponent,

    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
