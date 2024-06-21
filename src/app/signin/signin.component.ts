import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public route:Router){}
  public message ='';
  public firstName=''; public lastName=''; public userName=''; public password='';
  public array:any=[];

  ngOnInit(){
   this.array= JSON.parse(localStorage['students_data'])
  }

signUp(){
  let obj={
    fname:this.firstName, lname:this.lastName, userN:this.userName, password:this.password
  }
  
  let username = this.array.find((student:any, index:number)=>student.userN==this.userName)
  
  if(username){
    this.message = "Username already exist";
  }  
  else {
    //console.log(obj);
  this.array.push(obj);
  localStorage.setItem('students_data', JSON.stringify(this.array))
  console.log(this.array); 
  this.route.navigate(['/login'])

}
  
  
  
}
}
