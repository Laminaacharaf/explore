import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CurriculumService } from '../services/curriculum.service';


@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.css']
})
export class DetailcvComponent implements OnInit {

  id:any;
  retour= {} ;
  constructor(private route: ActivatedRoute
    , private router: Router, private curri_serv:CurriculumService) { }

  ngOnInit() {
  }

  lire_cv(ID){
    
     console.log(ID)
     return this.curri_serv.lire_cv(ID).subscribe(data =>{
                            this.retour = data;
                            console.log(this.retour)
     }, error => console.log("Error " +error)
    )
   
 
   }

}
