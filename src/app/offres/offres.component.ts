import { Component, OnInit } from '@angular/core';
import { OffresService } from '../services/offres.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {


  listOffres: any;

  constructor(private offre_serv: OffresService ) { }

  ngOnInit() {
    this.listoffres()
  }

  listoffres(){
    return this.offre_serv.getListOffre().subscribe(data =>{
                                this.listOffres = data;
                                console.log(this.listOffres)
    }, error => console.log("Error " +error))
  }

}
