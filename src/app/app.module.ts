import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { AgregarEdiarPersonaComponent } from './components/agregar-ediar-persona/agregar-ediar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonasComponent,
    AgregarEdiarPersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
