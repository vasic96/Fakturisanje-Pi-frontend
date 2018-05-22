import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RegistracijaService } from './registracija.service';
import { FormsModule } from '@angular/forms';
import { MestaComponent } from './mesta/mesta.component';
import { PreduzeceListComponent } from './preduzece-list/preduzece-list.component'
import { MestoService } from './mesto.service';
import { PreduzeceService } from './preduzece.service';
import { CenovnikComponent } from './cenovnik/cenovnik.component';
import { CenovnikService } from './cenovnik.service';
import { PoslovnaGodinaComponent } from './poslovna-godina/poslovna-godina.component';
import { PoslovnaGodinaService } from './poslovna-godina.service';
import { FaktureListComponent } from './fakture-list/fakture-list.component';
import { FaktureService } from './fakture.service';
import { PoslovniPartnerService } from './poslovni-partner.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    MestaComponent,
    PreduzeceListComponent,
    CenovnikComponent,
    PoslovnaGodinaComponent,
    FaktureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [RegistracijaService,MestoService,PreduzeceService,CenovnikService,PoslovnaGodinaService,FaktureService,PoslovniPartnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
