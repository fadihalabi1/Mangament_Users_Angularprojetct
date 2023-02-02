import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
Urllogin:string="https://reqres.in/api/login";
constructor(private http:HttpClient) { }

login(data:any): Observable<any>{
 console.log("im server");
  return this.http.post<any>(this.Urllogin,data)

}

}
