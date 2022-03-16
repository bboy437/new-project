import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NotFoundComponent } from './component/not-found/not-found.component';




export const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: '', component: HomeComponent },

  // { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
