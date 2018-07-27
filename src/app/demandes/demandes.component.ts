import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {


  listDemande :any
  demande:any
  supprime:any

  constructor(private dem_serv:DemandeService) { }

  ngOnInit() {
    this.getlist()
  }

  getlist(){
    return this.dem_serv.getListDemandes().subscribe(data =>{
                          this.listDemande = data;
                          console.log(this.listDemande)
    },error => console.log("Error:: " +error ))
  }

  lire(id){
    return this.dem_serv.lire_demande(id).subscribe(data =>{
                          this.demande = data;
                          console.log(this.demande)
    }, error => console.log("Error:: " +error ))


  }


  supprimer(id){
    return this.dem_serv.supp_demande(id).subscribe(data =>{
      this.supprime = data;
      console.log(this.supprime)
  },error => console.log("Error:: " +error ))
}

}
