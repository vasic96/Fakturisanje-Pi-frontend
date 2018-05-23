import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistracijaComponent } from './registracija/registracija.component';
import { MestaComponent } from './mesta/mesta.component';
import { PreduzeceListComponent } from './preduzece-list/preduzece-list.component';
import { CenovnikComponent } from './cenovnik/cenovnik.component';
import { PoslovnaGodinaComponent } from './poslovna-godina/poslovna-godina.component';
import { FaktureListComponent } from './fakture-list/fakture-list.component';
import { FakturaComponent } from './faktura/faktura.component';

const routes: Routes = [
  {path: 'registracija',component:RegistracijaComponent},
  {path:'mesta',component:MestaComponent},
  {path:'preduzeca',component:PreduzeceListComponent},
  {path:'cenovnik',component:CenovnikComponent},
  {path: 'poslovna_godina',component:PoslovnaGodinaComponent},
  {path: 'fakture',component:FaktureListComponent},
  {path: 'fakture/:id',component:FakturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
