import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentguardGuard: CanActivateFn = (route, state) => {
  
  let user = JSON.parse(localStorage.getItem('students_data')!)
  let routers=inject(Router)
  
  if(!user){
    routers.navigate(['/signup'])
  }
  return true;
};
 