import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { HomeComponent } from './components/home/home.component';
import { FunkosComponent } from './components/funkos/funkos.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { NostrosComponent } from './components/nostros/nostros.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    HomeComponent,
    FunkosComponent,
    NavComponent,
    NostrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
