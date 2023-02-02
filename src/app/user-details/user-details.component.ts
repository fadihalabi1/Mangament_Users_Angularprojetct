import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 title="Ditails User: ";
 public listuser:any;
 public iduser:any;
 filteruser :any;


//  public get getid (){
//   return this.iduser;
//  }
//  public set setid(id:number){
//   this.iduser=id

//  }


  constructor(
    private router:ActivatedRoute,
    private apireq:ApiService,
    private routenavigate:Router) { }

  ngOnInit() {
    this.title+=this.router.snapshot.paramMap.get('id');
     this.iduser=this.router.snapshot.paramMap.get('id');
     console.log(this.iduser);
    this.getuserdetial();
  }

  getuserdetial(){
    this.apireq.getuserdetails().subscribe(
      data=>{
       this.listuser=data.data;
        this.filteruser=this.listuser.filter((f:any)=>
        f.id==this.iduser)

       console.log(this.filteruser);
     }
    )
   }

}
