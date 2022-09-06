import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  // data:any;
  // this.data=localStorage.getItem('lang');
  public language=new BehaviorSubject<any>('en')
// loggedUrl="https://angular-projects-7eb1a-default-rtdb.firebaseio.com/logged.json"

  constructor(private http:HttpClient, private angularFireAuth: AngularFireAuth,private toastr: ToastrService) { }

  // postDataToDatabase(data:any){
  //   return this.http.post(this.loggedUrl,data);
  // }
  createUser(value:any) {
    console.log(value);
    return this.angularFireAuth.createUserWithEmailAndPassword(value.email, value.password);
    // return new Promise<any>((resolve, reject) => {
    //   this.angularFireAuth.createUserWithEmailAndPassword(value.email, value.password)
    //     .then(
    //       res => resolve(res),
    //       err => reject(err))
    // })
  }
loginUser(value:any) {
 
      return this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password);
    
  }

  gettoken(){
    let token=localStorage.getItem('token')
   if(token){
     return true
   }
   else{
     return false
   }
      
       
}
}