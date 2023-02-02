import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListviewUserComponent } from './Listview-User/Listview-User.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      ListviewUserComponent,
      UserDetailsComponent,
      NavbarComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'users/:id',component:UserDetailsComponent},
      {path:'users',component:ListviewUserComponent},
      {path:'login',component:LoginComponent},
     {path:'' ,redirectTo:'login',pathMatch:'full'},
     {path:'** ' ,redirectTo:'login',pathMatch:'full'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
