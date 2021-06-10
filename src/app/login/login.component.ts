import { Component, OnInit } from '@angular/core';

import { Users } from '../models/users';
import { UsersService } from '../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  user: Users = new Users();
  usersList: Array<Users> = [];
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    
    
  }

  


  login(){
    /*this.usersService.getALlUsers().subscribe (
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      });
    */
    console.log(this.user);
    this.usersService.getALlUsers().subscribe(res =>
      {
        var flag : boolean = true;
        res.forEach(element =>
          {
            if(element.email == this.user.email && element.password == this.user.password){
              alert('Successfully Logged in');
              flag = false;
            }
          });
          if(flag)
            alert('Invalied Credentials');
          
        },
        error =>{
          console.log(error)
        });
         
      
   
    
    
  }

  navigate(){
    this.router.navigateByUrl('/dashboard');
  }

}
