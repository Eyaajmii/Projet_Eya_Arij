import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { DashadminComponent } from './composants/admin/dashadmin/dashadmin.component';
import { MenuadminComponent } from './composants/admin/menuadmin/menuadmin.component';
import { LoginComponent } from './composants/login/login.component';
import { CertaficatComponent } from './composants/public/certaficat/certaficat.component';
import { DashpublicComponent } from './composants/public/dashpublic/dashpublic.component';
import { EventComponent } from './composants/public/event/event.component';
import { FormationComponent } from './composants/public/formation/formation.component';
import { HomeComponent } from './composants/public/home/home.component';
import { MenupublicComponent } from './composants/public/menupublic/menupublic.component';
import { SelectedformationComponent } from './composants/public/selectedformation/selectedformation.component';

@NgModule({
  declarations: [
    AppComponent,
    ErreurComponent,
    DashadminComponent,
    MenuadminComponent,
    LoginComponent,
    CertaficatComponent,
    DashpublicComponent,
    EventComponent,
    FormationComponent,
    HomeComponent,
    MenupublicComponent,
    SelectedformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
