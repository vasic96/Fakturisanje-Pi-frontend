import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistracijaComponent } from './registracija/registracija.component';
import { MestaComponent } from './mesta/mesta.component';
import { PreduzeceListComponent } from './preduzece-list/preduzece-list.component';

const routes: Routes = [
  {path: 'registracija',component:RegistracijaComponent},
  {path:'mesta',component:MestaComponent},
  {path:'preduzeca',component:PreduzeceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
