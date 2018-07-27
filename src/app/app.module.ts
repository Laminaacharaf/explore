import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { CoolStorageModule } from '@angular-cool/storage';

import {InscriptionService} from './services/inscription.service';
import {AuthGuardService} from './services/auth-guard.service';


import { AppRoutingModule } from './app.routing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CurriculumService } from "./services/curriculum.service";
import { OffresService } from './services/offres.service';
import { DemandeService } from './services/demande.service';
import { PostulantsService } from './services/postulants.service';


import { AppComponent } from './app.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { NewcvComponent } from './newcv/newcv.component';
import { API } from './constantes/api';
import { InscriptionComponent } from './inscription/inscription.component';
import { DetailcvComponent } from './detailcv/detailcv.component';
import { OffresComponent } from './offres/offres.component';
import { CompteRecrutComponent } from './compte-recrut/compte-recrut.component';
import { DemandesComponent } from './demandes/demandes.component';
import { PostulantsComponent } from './postulants/postulants.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    HomeComponent,
    LoginComponent,
    CurriculumComponent,
    MoncompteComponent,
    NewcvComponent,
    InscriptionComponent,
    DetailcvComponent,
    OffresComponent,
    CompteRecrutComponent,
    DemandesComponent,
    PostulantsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CoolStorageModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [CurriculumService,API,InscriptionService,AuthGuardService,DetailcvComponent,OffresService, DemandeService, PostulantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
