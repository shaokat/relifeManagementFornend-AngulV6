import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UsernameValidators } from './signup.validators';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(private auth: AuthService, 
    fb: FormBuilder,usernameValidators: UsernameValidators,private http: Http) {
     this.form =   
    fb.group({
      userName:['',[
        Validators.required,
        Validators.minLength(3),
        usernameValidators.cannotContainSpace
      ],this.shouldBeUnique.bind(this)],
      password: ['',[
        Validators.required,
        Validators.minLength(5),
        usernameValidators.cannotContainSpace
      ]]
    });
   }
  ngOnInit() {
   
  }

  
  public get userName() : AbstractControl {
    return this.form.get('userName');
  }

  
  public get password() : AbstractControl {
    return this.form.get('password');
  }
  
  signup() {
    this.auth.signup(this.form)
   // console.log(this.form);
    
  }
  
  shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
     this.auth.getlAllUser()
      .toPromise()
      .then(res =>{    
        if((res.json() as string[]).indexOf(control.value) !== -1) {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      })
    });
  }
}