import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggerUser = localStorage.getItem('userData');
  if (loggerUser) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
