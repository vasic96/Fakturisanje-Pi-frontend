import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistracijaComponent } from './registracija/registracija.component';
import { MestaComponent } from './mesta/mesta.component';
import { PreduzeceListComponent } from './preduzece-list/preduzece-list.component';
import { CenovnikComponent } from './cenovnik/cenovnik.component';
import { PoslovnaGodinaComponent } from './poslovna-godina/poslovna-godina.component';
import { FaktureListComponent } from './fakture-list/fakture-list.component';
import { FakturaComponent } from './faktura/faktura.component';
import { GrupaRobeComponent} from './grupa-robe/grupa-robe.component'
import { RobaComponent } from './roba/roba.component';
import { JedinicaMereComponent } from './jedinica-mere/jedinica-mere.component';
import { PdvComponent } from './pdv/pdv.component';

const routes: Routes = [
  {path: 'registracija',component:RegistracijaComponent},
  {path:'mesta',component:MestaComponent},
  {path:'preduzeca',component:PreduzeceListComponent},
  {path:'cenovnik',component:CenovnikComponent},
  {path: 'poslovna_godina',component:PoslovnaGodinaComponent},
  {path: 'fakture',component:FaktureListComponent},
  {path: '',redirectTo:'/preduzeca',pathMatch:'full'},
  {path: 'fakture/:id',component:FakturaComponent},
  {path:'grupaRobe', component:GrupaRobeComponent},
  {path: 'roba', component:RobaComponent},
  {path: 'jedinicaMere', component: JedinicaMereComponent },
  {path: 'pdv', component: PdvComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
