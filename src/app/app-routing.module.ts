import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosComponent } from './elementos/elementos.component'
import { NotasComponent } from './notas/notas.component'


const routes: Routes = [
      { path: 'lista', component: ElementosComponent },
      { path: 'tareas', component: NotasComponent } 
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
