import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CommandComponent } from './components/command/command.component';
import { TimerComponent } from './components/timer/timer.component';
import {InterfaceComponent} from "./components/interface/interface.component";

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    CommandComponent,
    TimerComponent
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
