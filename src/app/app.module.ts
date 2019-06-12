import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ElementosComponent } from './elementos/elementos.component';
import { NotasComponent } from './notas/notas.component';
import { LogComponent } from './log/log.component';
import { TaskCompleteDirective } from './task-complete.directive';
import { AdminComponent } from './admin/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  declarations: [ 
    AppComponent,
    LogComponent,
    NotasComponent,
    ElementosComponent,
    TaskCompleteDirective
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
