import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { UserModel } from '../user-dash/user-dashboardmodel';
@Component({
  selector: 'app-Listview-User',
  templateUrl: './Listview-User.component.html',
  styleUrls: ['./Listview-User.component.css'],
})
export class ListviewUserComponent implements OnInit {
  formvalue!: FormGroup;
  usermodelobj: UserModel = new UserModel();
  public users: any;
  allUser: number = 0;
  pagenumber: number = 1;
  per_page:any;

  constructor(private formbuilder: FormBuilder, private a: ApiService) {}


  ngOnInit() {
    this.formvalue = this.formbuilder.group({
      Name: [''],
      Jop: [''],
    });
    this.getuser();
    console.log(this.getuser());
  }

  adduser() {
    this.usermodelobj.Name = this.formvalue.value.Name;
    this.usermodelobj.Name = this.formvalue.value.Jop;

    this.a.postuser(this.usermodelobj).subscribe(
      (res) => {
        console.log(res);
        let ref = document.getElementById('close');
        ref?.click();
        alert('saccess');
        this.formvalue.reset();
      },
      (Error) => {
        alert('err');
      }
    );
  }

  getuser() {
    this.a.getuser(this.pagenumber).subscribe((data) => {
      this.users = data.data;
      console.log(this.users);
      this.allUser = data.total;
      console.log(data.total);
      this.per_page=data.per_page;
      console.log(data.per_page);
    });
  }
  renderpage(event: number) {
    this.pagenumber = event;
    console.log(this.pagenumber);
    this.getuser();
  }
}
