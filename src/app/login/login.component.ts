import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  toTakeResponse:any;
  token:string='';

  submitted = false;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private service: MasterService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    function json2array(json){
      var result = [];
      var keys = Object.keys(json);
      keys.forEach(function(key){
          result.push(json[key]);
      });
      return result;
  }

}
  get loginFormControls() {
    return this.loginForm.controls;
  }
  public loginSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {

      this.service.loginUser(this.loginForm.value).then((res) => {

        this.toastr.success('Logged In');
        console.log(res)
        this.toTakeResponse=res
        this.token=this.toTakeResponse.user._delegate.accessToken
        console.log('o-',this.token)

        localStorage.setItem('token', this.token);
        this.router.navigate(['/dashboard']);
        
      },error =>{
        this.toastr.error('Invalid Data');
        console.log(error.message)
      });
      
    }
  }
  


}
