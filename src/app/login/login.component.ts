import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Userlogin } from '../user-dash/user-loginmodel ';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginform!:FormGroup;
 token:any;
 userloginobj:Userlogin=new Userlogin();
  constructor(
    private formbuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private auth:AuthService
    ) { }

  ngOnInit() {
  this.initform();
  }
  initform(){
  this.loginform=new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  }
  loginproces(){
    if(this.loginform.valid)
    { console.log(this.loginform.value.email,
                 this.loginform.value.password);
      this.auth.login(this.loginform.value).subscribe(
        result=>{
            if(result.token)
            {
              console.log(result.token);
              localStorage.setItem("token",result.token);
              this.router.navigate(['/users']);
              alert("login saccess");
            }

          },Error=>{alert("fail login !! wrong in email or password");}

          )
        }
      }









}
