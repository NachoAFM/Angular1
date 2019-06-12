import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosComponent } from './elementos/elementos.component'
import { NotasComponent } from './notas/notas.component'
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
      { path: '', redirectTo: '/lista', pathMatch: 'full' },
      { path: 'lista', component: ElementosComponent },
      { path: 'tareas', component: NotasComponent }, 
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' } 
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
