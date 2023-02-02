import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
Urlpost:string="https://reqres.in/api/users";

constructor( private http:HttpClient) { }
postuser(data:any){

 return this.http.post<any>(this.Urlpost,data).
 pipe(map((res:any)=>{return res;
  }
 ))
}
getuser(page:number):Observable<any>{
  return this.http.get<any>(this.Urlpost+'?page='+page);
  //.pipe(map((res:any)=>{return res;}));
}
getuserdetails():Observable<any>{
  return this.http.get<any>(this.Urlpost);

}



}
