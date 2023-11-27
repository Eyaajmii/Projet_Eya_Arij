import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashpublicComponent } from './composants/public/dashpublic/dashpublic.component';
import { HomeComponent } from './composants/public/home/home.component';
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
import { PassComponent } from './composants/admin/pass/pass.component';
import { InscriptionComponent } from './composants/abonne/inscription/inscription.component';
import { MembresComponent } from './composants/public/membres/membres.component';
import { ConsultAbonneComponent } from './composants/admin/consult-abonne/consult-abonne.component';



const routes: Routes = [
  //publicdash
  {
    path: '',
    component: DashpublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'Home', component: HomeComponent },
      { path: 'membres', title: 'membres', component: MembresComponent },
      { path: 'certificat', title: 'Nos Certificats', component: CertaficatComponent },
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
      {
        path: 'fonction',
        title: 'fonction',
        component: FonctionnalitesComponent,
        children: [
          { path: 'consulter', title: 'consulter', component: ConsultantComponent },
          { path: 'ajouter', title: 'ajouter', component: AjoutantComponent },
          {path:'modifierPass',title:'modifierPass',component:PassComponent},
          {path:'consulterabonne',title:'consulterabonne',component:ConsultAbonneComponent}
             ]
      },
    ]},
    //abonne
    {path:'inscription',title:'inscription',component:InscriptionComponent},
      //erreur
  { path: '**', title: 'Error 404', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
