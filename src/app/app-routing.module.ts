import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { KelvinComponent } from './kelvin/kelvin.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'fahrenheit', component: FahrenheitComponent },
  { path: 'kelvin', component: KelvinComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
