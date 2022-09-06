import { Component } from '@angular/core';
import { MasterService } from './master.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authGuard';
  lang:any;
  constructor(private service:MasterService){
    this.lang =localStorage.getItem('lang')
    this.service.language.next(this.lang)
  }
 
  
}
