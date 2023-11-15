import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashpublicComponent } from './composants/public/dashpublic/dashpublic.component';
import { HomeComponent } from './composants/public/home/home.component';
import { EventComponent } from './composants/public/event/event.component';
import { CertaficatComponent } from './composants/public/certaficat/certaficat.component';
import { FormationComponent } from './composants/public/formation/formation.component';
import { SelectedformationComponent } from './composants/public/selectedformation/selectedformation.component';
import { ErreurComponent } from './composants/erreur/erreur.component';

const routes: Routes = [
  {
    path: '',
    component:DashpublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'Home', component:HomeComponent },
      { path: 'event', title: 'Event', component:EventComponent },
      { path: 'certaficat', title: 'Nos Certificats', component:CertaficatComponent },
      { path: 'formation', title: 'Formations', component:FormationComponent},
      { path: 'formation/:idf', title: 'Formations', component:SelectedformationComponent },
      { path: '**', title: 'Error 404', component:ErreurComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
