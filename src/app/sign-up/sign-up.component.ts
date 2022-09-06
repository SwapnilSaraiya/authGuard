import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  hide = true;
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: MasterService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  public signUp() {
   try{
      this.service.createUser(this.signUpForm.value).then((res) => {
       
        this.toastr.success('Sign Up Successfully');
        console.log(res, 'sign Up');
        this.router.navigate(['login']);
      
      }).catch(error=>{
        console.log(error.message)
      });
    }catch(e){
      console.log(e)
    }
    finally{
      console.log("happy")
    } 
  }
}
