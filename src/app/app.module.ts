import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
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
import { FakturaComponent } from './faktura/faktura.component';
import { StavkeCenovnikaService } from './stavke-cenovnika.service';
import { CustomFormsModule } from 'ng4-validators';
import { MyHttpInterceptor } from './my-http-interceptor';
import { RobaComponent } from './roba/roba.component';
import { GrupaRobeComponent } from './grupa-robe/grupa-robe.component';
import { JedinicaMereComponent } from './jedinica-mere/jedinica-mere.component';
import { PdvComponent } from './pdv/pdv.component';
import { LoginProveraService } from './login-provera.service';
import { PoslovniPartnerComponent } from './poslovni-partner/poslovni-partner.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    MestaComponent,
    PreduzeceListComponent,
    CenovnikComponent,
    PoslovnaGodinaComponent,
    FaktureListComponent,
    FakturaComponent,
    RobaComponent,
    GrupaRobeComponent,
    JedinicaMereComponent,
    PdvComponent,
    PoslovniPartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule 
    
    
  ],
  providers: [RegistracijaService,MestoService,PreduzeceService,CenovnikService,PoslovnaGodinaService,FaktureService,PoslovniPartnerService
              ,StavkeCenovnikaService,{
                    provide: HTTP_INTERCEPTORS,
                    useClass: MyHttpInterceptor,
                    multi: true
                  },LoginProveraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
