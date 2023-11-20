import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashpublicComponent } from './composants/public/dashpublic/dashpublic.component';
import { HomeComponent } from './composants/public/home/home.component';
import { EventComponent } from './composants/public/event/event.component';
import { CertaficatComponent } from './composants/public/certaficat/certaficat.component'; // Correction ici
import { FormationComponent } from './composants/public/formation/formation.component';
import { SelectedformationComponent } from './composants/public/selectedformation/selectedformation.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { DashadminComponent } from './composants/admin/dashadmin/dashadmin.component';
import { InformationComponent } from './composants/admin/information/information.component';
import { FonctionnalitesComponent } from './composants/admin/fonctionnalites/fonctionnalites.component';
import { LoginComponent } from './composants/login/login.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  //publicdash
  {
    path: '',
    component: DashpublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'Home', component: HomeComponent },
      { path: 'event', title: 'Event', component: EventComponent },
      { path: 'certificate', title: 'Nos Certificats', component: CertaficatComponent }, // Correction ici
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
      { path: 'information', title: 'information', component: InformationComponent },
      { path: 'fonction', title: 'fonction', component: FonctionnalitesComponent },
      { path: '', redirectTo: 'information', pathMatch: 'full' },
      { path: '**', title: 'Error404', component: ErreurComponent }
    ]
  },
  { path: '**', title: 'Error 404', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
