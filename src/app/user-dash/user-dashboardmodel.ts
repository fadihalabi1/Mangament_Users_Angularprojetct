export interface Iuserandpagination{
  page:number ,
  per_page:number,
  total: number,
  total_pages: number,
  data:Iuser
}



export interface Iuser{
  id:number,
  email:string,
  first_name:string,
  last_name:string,
  avatar:string

}


export class UserModel{
  Name:string='';
  Jop:string='';
}

