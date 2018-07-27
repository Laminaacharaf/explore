import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../services/curriculum.service';
import { DetailcvComponent } from '../detailcv/detailcv.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candidats : any;
  candidat_search :any;

  

 /* search_obj = {
    ageCandidat:'tegf',
    villeCandidat:'wethg',
    experience:'rgsf',
    niveau:'qrf',
    domaine:'egf'
  }*/

  listCriterias = {
    linkOperator: "AND",
    rule: {
      column:"ageCandidat",
      operator: "=",
      value: {
   
        ageCandidat:'tegf',
        

      }
        
  }
}


listCriterias1 = {
  linkOperator: "AND",
  rule: {
    column:"villeCandidat",
    operator: "=",
    value: {
 
      villeCandidat:'tegf',
      

    }
      
}
}

listCriterias2 = {
  linkOperator: "AND",
  rule: {
    column:"experience",
    operator: "=",
    value: {
 
      experience:'tegf',
      

    }
      
}
}

listCriterias3 = {
  linkOperator: "AND",
  rule: {
    column:"niveau",
    operator: "=",
    value: {
 
      niveau:'tegf',
      

    }
      
}
}

listCriterias4 = {
  linkOperator: "AND",
  rule: {
    column:"domaine",
    operator: "=",
    value: {
 
      domaine:'tegf',
      

    }
      
}
}





  criteres = {
    criterias: {
      criteriaList: [
     this.listCriterias,
     this.listCriterias1,
     this.listCriterias2,
     this.listCriterias3,
     this.listCriterias4
      ]
    },
    fields: null
  }

  

  constructor(private candidat:CurriculumService, private detailCV:DetailcvComponent ) {
    
   }

  ngOnInit() {
    this.list_candidat()
    
  }




  list_candidat(){
    console.log('hello over here!!')
   return this.candidat.getListcv().subscribe(data =>{
                      this.candidats = data;
                      console.log(this.candidats)
   },error => console.log("Error:: " +error));
  
  }

  rechercher(){
    console.log(JSON.stringify(this.criteres));
    console.log(JSON.stringify(this.listCriterias.rule));
    return this.candidat.list_rechercher(JSON.stringify(this.criteres)).subscribe(data =>{
                                  this.candidat_search = data;
                                  console.log(this.candidat_search)
    }, error => console.log("Error " +error))
  }

lireCV(id){

  return this.detailCV.lire_cv(id);
  
}
}
