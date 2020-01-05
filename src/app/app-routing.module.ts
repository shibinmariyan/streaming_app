import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reg', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
