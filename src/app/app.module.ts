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

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    MestaComponent,
    PreduzeceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [RegistracijaService,MestoService,PreduzeceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
