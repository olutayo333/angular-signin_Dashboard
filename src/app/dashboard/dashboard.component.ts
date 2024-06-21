import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 
  public user:any={};
  
  ngOninit(){

    this.user= JSON.parse(localStorage.getItem('students_data')!);
    console.log(this.user);
    
  }
}
