import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Users } from "../models/users";

@Injectable()
export class UsersService {
  constructor( private httpClient:HttpClient){}

  addUsers(newUsers:Users) {
    // http post

    return this.httpClient.post<Users>('http://localhost:3000/users',newUsers);
    
  }



  getALlUsers() {
    // http get
    return this.httpClient.get<Array<Users>>('http://localhost:3000/users')
  }
}
