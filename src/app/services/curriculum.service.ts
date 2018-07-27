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
export class CurriculumService {

  constructor(private http:HttpClient, private apiUrls:API) { }

  create_cv(objet:any){
   return this.http.post(this.apiUrls.creerPostulantUrl, JSON.stringify(objet),httpOptions);

  }
  list_rechercher(data): Observable<any> {
    console.log(data);
    return this.http.post(this.apiUrls.candidatSearch,data, httpOptions);
  }
  

  getListcv(){
    return this.http.get(this.apiUrls.BaseUrl + this.apiUrls.candidatUrl);
  }


  lire_cv(id){

    return this.http.get(this.apiUrls.BaseUrl + this.apiUrls.detailCvUrl + '/' + id, httpOptions);
  }
  


}
