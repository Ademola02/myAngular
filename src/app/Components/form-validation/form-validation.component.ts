import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
 formData:any;
 submitted=false;

  constructor(private fb: FormBuilder) {
    this.formData= this.fb.group({
      username:["",[Validators.required, Validators.minLength(4)]],
      password:["", [Validators.required]],
      email: ["",[Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  get username(){
    return this.formData.get("username");
  }
  get password(){
    return this.formData.get("password");
  }
  get email(){
    return this.formData.get("email");
  }
  submit(){
    alert('works')
    console.log(this.formData.value)
     this.submitted=true;
  }
}
