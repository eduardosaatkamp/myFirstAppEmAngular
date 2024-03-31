import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OlaMundoComponent } from './ola-mundo/ola-mundo.component';

import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './views/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaMundoComponent,
    CarouselComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
