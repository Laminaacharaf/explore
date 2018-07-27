import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API } from "../constantes/api";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*',
    
  })
};


@Injectable()
export class DemandeService {

  constructor(private http:HttpClient, private apiUrls:API) { }



  getListDemandes(){
    return this.http.get(this.apiUrls.BaseUrl + this.apiUrls.listDemUrl, httpOptions);
  }


  lire_demande(id){

    return this.http.get(this.apiUrls.BaseUrl + this.apiUrls.listDemUrl + '/' + id, httpOptions);
  }

  supp_demande(id){
    return this.http.delete(this.apiUrls.BaseUrl + this.apiUrls.listDemUrl + '/' + id,httpOptions)
  }

}
