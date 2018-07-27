import { Component, OnInit } from '@angular/core';
import { PostulantsService } from '../services/postulants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postulants',
  templateUrl: './postulants.component.html',
  styleUrls: ['./postulants.component.css']
})
export class PostulantsComponent implements OnInit {

  listPost:any
  post:any
  supprime:any
  constructor(private post_serv:PostulantsService) { }

  ngOnInit() {
    this.getlist()
  }


  getlist(){
    return this.post_serv.getListPostulant().subscribe(data =>{
                          this.listPost = data;
                          console.log(this.listPost)
    },error => console.log("Error:: " +error ))
  }

  lire(id){
    return this.post_serv.lire_post(id).subscribe(data =>{
                          this.post = data;
                          console.log(this.post)
    }, error => console.log("Error:: " +error ))


  }


  supprimer(id){
    return this.post_serv.supp_post(id).subscribe(data =>{
      this.supprime = data;
      console.log(this.supprime)
      alert('Une ligne supprimée avec succès')
      
  },error => console.log("Error:: " +error ))
}



}
