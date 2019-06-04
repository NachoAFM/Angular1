import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGuard } from './admin.guard';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [ AdminGuard ],
  declarations: [LoginComponent, AdminPanelComponent, AdminComponent]
})
export class AdminModule { }
