import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashpublicComponent } from './composants/public/dashpublic/dashpublic.component';
import { HomeComponent } from './composants/public/home/home.component';
import { EventComponent } from './composants/public/event/event.component';
import { FormationComponent } from './composants/public/formation/formation.component';
import { SelectedformationComponent } from './composants/public/selectedformation/selectedformation.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { DashadminComponent } from './composants/admin/dashadmin/dashadmin.component';
import { InformationComponent } from './composants/admin/information/information.component';
import { FonctionnalitesComponent } from './composants/admin/fonctionnalites/fonctionnalites.component';
import { LoginComponent } from './composants/login/login.component';
import { adminGuard } from './guards/admin.guard';
import { CertaficatComponent } from './composants/public/certaficat/certaficat.component';
import { ConsultantComponent } from './composants/admin/consultant/consultant.component';
import { AjoutantComponent } from './composants/admin/ajoutant/ajoutant.component';
import { ModificationComponent } from './composants/admin/modification/modification.component';
import { SuppressionComponent } from './composants/admin/suppression/suppression.component';

const routes: Routes = [
  //publicdash
  {
    path: '',
    component: DashpublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'Home', component: HomeComponent },
      { path: 'event', title: 'Event', component: EventComponent },
      { path: 'certaficat', title: 'Nos Certificats', component: CertaficatComponent },
      { path: 'formation', title: 'Formations', component: FormationComponent },
      { path: 'formation/:idf', title: 'Formations', component: SelectedformationComponent },
    ]},
    //login
  { path: 'extranet', title: 'extranet', component:LoginComponent },
  //adminstarteur
  {
    path: 'adminstrateur',
    component: DashadminComponent,
    canActivate:[adminGuard],
    children: [
      { path: '', redirectTo: 'information', pathMatch: 'full' },
      { path: 'information', title: 'information', component: InformationComponent },
      { path: 'fonction', title: 'fonction', component:FonctionnalitesComponent },
    ]
  },
  {path:'consulter',title:'consulter',component:ConsultantComponent},
      {path:'ajouter',title:'ajouter',component:AjoutantComponent},
      {path:'modifier',title:'modifier',component:ModificationComponent},
      {path:'supprimer',title:'supprimer',component:SuppressionComponent},
      //erreur
  { path: '**', title: 'Error 404', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
