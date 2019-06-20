import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosComponent } from './elementos/elementos.component'
import { NotasComponent } from './notas/notas.component'
import { AdminComponent } from './admin/admin/admin.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
      { path: '', redirectTo: '/lista', pathMatch: 'full' },
      { path: 'lista', component: ElementosComponent },
      { path: 'tareas', component: NotasComponent }, 
      { path: 'formulario', component: FormularioComponent },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }, 
      { path: '**' , component: ErrorPageComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
