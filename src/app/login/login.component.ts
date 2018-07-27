import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CoolLocalStorage } from '@angular-cool/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users:any;
notify = '';
connect : any;
user = {
  email:'',
  password:''
}

localStorage: CoolLocalStorage;

  constructor(private sign_up:InscriptionService, private router:Router, localStorage: CoolLocalStorage) {

    this.localStorage = localStorage;   
   }

  ngOnInit() {
    this.listUser()
  
  }
  
  listUser(){
    
    return this.sign_up.list_user().subscribe(data =>{
                            this.users = data ;
                        console.log(this.users)     
    },error => console.log("Error "+ error));
  }


  connexion(){
    console.log(JSON.stringify(this.user))    
   for(var i = 0; i < this.users.length;i++){
                          if(this.user.email === this.users[i]['email'] && this.user.password === this.users[i]['password'] && this.users[i]['typeUser'] === 'CANDIDAT')
                          { 
                           let val =  this.localStorage.setItem('user', this.user.email);
                            this.localStorage.setItem('userPass', this.user.password);
                            
                            console.log(this.localStorage.getItem('user'));
                            console.log(this.localStorage.getItem('userPass'));
                            console.log(val)
                            
                            console.log('hello I am in this function')                              
                            this.connect = this.users
                            this.notify = 'Connexion réussie'
                            this.router.navigate(['/compte']);
                            return false;

                            
                          }
                        else if(this.user.email === this.users[i]['email'] && this.user.password === this.users[i]['password'] && this.users[i]['typeUser'] === 'RECRUTEUR')
                          {
                            console.log('i am the else if')
                            this.connect = this.users                            
                            this.notify = 'Connexion réussie'
                            this.router.navigate(['/recruteur']);



                          }else{
                            console.log('connexion echouée')
                          }
       
                          
                        }



   
  }

}
