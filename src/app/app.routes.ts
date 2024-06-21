import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { studentguardGuard } from './guards/studentguard.guard';

export const routes: Routes = [
    {path:"", component:SigninComponent},
    {path:'signup', component:SigninComponent},
    {path:'dashboard', 
        children:[
                {path:'', component:DashboardComponent},
            ], canActivate:[studentguardGuard]},
    
    {path:'login', component:LoginComponent},
    {path:'**', component:SigninComponent}
];
