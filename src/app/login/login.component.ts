import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors } 
    from '@angular/forms';
    import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }


  form = this.fb.group({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", [Validators.required, Validators.minLength(8)])})
 
    onSubmit(){
      alert("sub")
    }

}
