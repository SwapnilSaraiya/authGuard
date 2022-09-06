import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
flag:boolean=false;
show:boolean=true;
// @Input() lang:any;
lang:any;


   constructor(private service :MasterService, private router: Router, private translate: TranslateService) { 
    // this language will be used as a fallback when a translation isn't found in the current language
  //  this.service.language.subscribe(res=> console.log(res))
    this.service.language.subscribe(res=>{
      this.lang=res;
      translate.setDefaultLang(this.lang);
    })
     

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('en');
  }
  

  ngOnInit(): void {
    this.prove();
  }
prove(){
  let i: number = 2;

while (i < 4) {
    console.log( "Block statement execution no." + i )
    i++;
}
//   const arr = [
//     {
//       firstName:'swapnil',
//       lastName:'saraiya'
//     },
//     {
//       firstName:'himanshu',
//       lastName:'lad'
//     },
//     {
//       firstName:'milan',
//       lastName:'soni'
//     },
//     {
//       firstName:'kiran',
//       lastName:'makadia'
//     },
//     {
//       firstName:'dhruvit',
//       lastName:'tandel'
//     }
//   ];
//   for(const data in arr) {
//     console.log("hello==>",arr[data]);
//   }
//   for(const data of arr) {
//     console.log(data);
//   }
// let a:string='undefined';
// console.log("a aa === >",a)
}

  signOut() {
        localStorage.removeItem('token')
        this.router.navigateByUrl('login');
    
  }
  Langtranslate(language:string){
    console.log(language)
    this.translate.use(language)
   localStorage.setItem('lang',language)
   // this.service.language.next(language)
  }

  // menuToggler(){
  //   this.flag=!this.flag;
  //   this.show=!this.show;
   
  // }
  navMethod(event:any){
    console.log(event)
  }

}
