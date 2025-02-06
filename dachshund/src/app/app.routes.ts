import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CuidadosComponent } from './pages/cuidados/cuidados.component';
import { LoversComponent } from './pages/lovers/lovers.component';

export const routes: Routes = [
  { path: '', component: LoversComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cuidados', component: CuidadosComponent },
];
