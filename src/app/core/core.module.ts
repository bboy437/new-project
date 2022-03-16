import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './component/login/login.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MaterialModule } from '../material.module';
import { DatePickerModule } from '../date-picker.module';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    MainLayoutComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    DatePickerModule
  ],
  exports: [
    MainLayoutComponent, LoginComponent
  ]
})
export class CoreModule { }
