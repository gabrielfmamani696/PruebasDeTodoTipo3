import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    HermanoComponent,
    EstiloHermanosDirective,
    MiPipePersonalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule //form Reactivo
>>>>>>> 11ce8ffc731dffa31dcff4212ddf8ef053f9997a
  ],
  providers: [
    provideClientHydration()
  ],
<<<<<<< HEAD
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// este archivo es un modulo
>>>>>>> 11ce8ffc731dffa31dcff4212ddf8ef053f9997a
