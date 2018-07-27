import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent} from './home/home.component'
import { LoginComponent } from './login/login.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { NewcvComponent } from './newcv/newcv.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DetailcvComponent } from './detailcv/detailcv.component';
import { OffresComponent } from './offres/offres.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { CompteRecrutComponent } from './compte-recrut/compte-recrut.component';
import { DemandesComponent } from './demandes/demandes.component';
import { PostulantsComponent } from './postulants/postulants.component';


const routes: Routes =[
    { path: 'home',      component: HomeComponent },  
    { path: 'login',      component: LoginComponent },  
    { path: 'sign_up',      component:InscriptionComponent },    
    { path: 'curriculum',      component: CurriculumComponent }, 
    { path: 'offres',      component: OffresComponent }, 
    { path: 'recruteur',      component: CompteRecrutComponent },       
    { path: 'compte',      component: MoncompteComponent },    
    { path: 'demandes',      component: DemandesComponent },
    { path: 'postulants',      component: PostulantsComponent },                                             
    { path: 'newCurriculum',      component:NewcvComponent },  
    { path: 'lirecv/:id',      component:DetailcvComponent },
    
    
    { path: '',               redirectTo: 'home', pathMatch: 'full' },
    
     // otherwise redirect to home
    { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
