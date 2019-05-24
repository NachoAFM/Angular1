import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ElementosComponent } from './elementos/elementos.component';
import { NotasComponent } from './notas/notas.component';
import { LogComponent } from './log/log.component';
import { TaskCompleteDirective } from './task-complete.directive';

@NgModule({
  declarations: [
    AppComponent,
    ElementosComponent,
    NotasComponent,
    LogComponent,
    TaskCompleteDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
