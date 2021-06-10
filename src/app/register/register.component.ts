import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Users = new Users();
  usersList: Array<Users> = [];
  constructor(private usersService: UsersService, private router:Router) { }

  ngOnInit(): void {

    this.getAllUsers();
  }

  registerForm = new FormGroup({

    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.email && Validators.required]),
    password: new FormControl('',[Validators.required && Validators.minLength(5)]),
    mobile: new FormControl('',[Validators.required && Validators.minLength(10)]),
    confirmpassword: new FormControl('',[Validators.required && Validators.minLength(5)])
  })
  // check username Error

  getUserNameErrorMsg() {
    if (this.registerForm.get('name').invalid && (this.registerForm.get('name').dirty || this.registerForm.get('name').touched)) {
      return "Enetr the UserNmae Properly"
    }
    else {
      return "";
    }
  }

  getEmailErrorMsg() {
    if (this.registerForm.get('email').invalid && (this.registerForm.get('email').dirty || this.registerForm.get('email').touched)) {
      return "Enter the email properly"
    }
    else {
      return "";
    }
  }

  getMobileErrorMsg() {

    if (this.registerForm.get('mobile').invalid && (this.registerForm.get('mobile').dirty || this.registerForm.get('mobile').touched)) {
      return "Enter the mobile number properly"
    }
    else {
      return "";
    }
  }

  


  getPasswordErrorMsg() {
    if (this.registerForm.get('password').invalid && (this.registerForm.get('password').dirty || this.registerForm.get('password').touched)) {
      return "Enter the password properly"
    }
    else {
      return "";
    }
  }

  
  checkPasswordandConfirmpassword(){
    if (this.registerForm.get('password').value == this.registerForm.get('confirmpassword').value){
      return "password and confirmpassword matched";
    }
    else{
      return "password and confirmpassword is not matched"
    }
  }






  register(){
    if(this.registerForm.valid){
      alert("User Registered Successfully")
      this.router.navigateByUrl('/login');
    }
    else{
      alert("Please enter correct details")
    }
  }


  //to store the data

  getAllUsers() {
    this.usersService.getALlUsers()
      .subscribe(resp => {
        console.log(resp);
        this.usersList= resp;

      },
        error => {
          console.log(error);

        })

  }

  addUsers() {
    console.log(this.user.name);
    this.usersList.push(this.user);
    this.usersService.addUsers(this.user)
      .subscribe(resp => {
        console.log(resp);
      },
        error => {
          console.log(error);

        })
    this.user = new Users();
  }


}
