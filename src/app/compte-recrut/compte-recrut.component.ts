import { Component, OnInit } from '@angular/core';
import { OffresService } from '../services/offres.service';

@Component({
  selector: 'app-compte-recrut',
  templateUrl: './compte-recrut.component.html',
  styleUrls: ['./compte-recrut.component.css']
})
export class CompteRecrutComponent implements OnInit {


  notify = '';
  errorNotify = '';
  retour:any;
  offre = {
    metier : '',
    titre:'',
    dateDebut:'',
    dateFin:''
  }

  constructor(private offre_serv:OffresService) { }

  ngOnInit() {
  }

  createOffre(){
    if(this.offre.metier != '' && this.offre.titre != '' && this.offre.dateDebut != '' && this.offre.dateFin != ''){
      return this.offre_serv.createOffre(this.offre).subscribe(data =>{
        this.retour = data;
        console.log(this.retour)
        this.notify = 'une nouvelle offre ajoutée'

        },error => console.log("Error " +error))
        
      }

      else{
       this.errorNotify = 'Aucune offre ajoutée' ;
        
      }



    }


}
