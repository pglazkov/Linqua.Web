import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginViewComponent } from './login-view/login-view.component';

// MATERIAL DESIGN MODULES
import {
  MdToolbarModule,
  MdButtonModule,
  MdCardModule,
} from '@angular/material';

export let MD_MODULES: any = [
  MdToolbarModule,
  MdButtonModule,
  MdCardModule
];

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ...MD_MODULES
  ],
  declarations: [LoginViewComponent]
})
export class LoginModule { }
