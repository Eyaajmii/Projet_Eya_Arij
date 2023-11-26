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

import { FormationComponent } from './composants/public/formation/formation.component';
import { HomeComponent } from './composants/public/home/home.component';
import { MenupublicComponent } from './composants/public/menupublic/menupublic.component';
import { SelectedformationComponent } from './composants/public/selectedformation/selectedformation.component';
import { FonctionnalitesComponent } from './composants/admin/fonctionnalites/fonctionnalites.component';
import { InformationComponent } from './composants/admin/information/information.component';
import { ConsultantComponent } from './composants/admin/consultant/consultant.component';
import { AjoutantComponent } from './composants/admin/ajoutant/ajoutant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassComponent } from './composants/admin/pass/pass.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MajusculePipe } from './pipes/majuscule.pipe';
import { InscriptionComponent } from './composants/abonne/inscription/inscription.component';
import { MembresComponent } from './composants/public/membres/membres.component';






@NgModule({
  declarations: [
    AppComponent,
    ErreurComponent,
    DashadminComponent,
    MenuadminComponent,
    FonctionnalitesComponent,
    LoginComponent,
    CertaficatComponent,
    DashpublicComponent,
 
    FormationComponent,
    HomeComponent,
    MenupublicComponent,
    SelectedformationComponent,
    InformationComponent,
    ConsultantComponent,
    AjoutantComponent,
    PassComponent,
    MajusculePipe,
    InscriptionComponent,
    MembresComponent,
    


   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    BrowserAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
