import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  notify = '';
  display = false;
  retour :any;
  user = {
    adresse: "",
    dateNaissance: "",
    email: "",
    nom: "",
    password: "",
    prenom: "",
    typeUser: ""

  }

  constructor(private sign_up_serv:InscriptionService,public toastr: ToastsManager, vcr: ViewContainerRef, private router:Router) {
    
      this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
  }



  createUser(){
    let data = JSON.stringify(this.user)
    console.log(data)
    return this.sign_up_serv.create_user(data).subscribe(ws =>{
                              this.retour = ws
                              this.notify = 'Inscription réussie!'
                              this.display = true
                              console.log(this.retour)
                              this.notify = 'Inscription réussie'
                              this.router.navigate(['/compte']);
    },
     error => this.notify = 'Une erreur est survenue!'
  
    
  )
  }

 


}
