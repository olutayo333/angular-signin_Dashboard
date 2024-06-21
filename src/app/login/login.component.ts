import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public route:Router){}

  public userName=''; public password=''; public message='';
  public studentArray:any=[]

  ngOnInit(){
    this.studentArray= JSON.parse(localStorage['students_data'])
   }

  login(){
    let loginUserExist = this.studentArray.find((student:any, index:number)=>student.userN==this.userName && student.password==this.password)
    if (!loginUserExist){
      this.message='Account Not Found';
    }
    else{
      this.route.navigate(['/dashboard'])
    }
  }
}
