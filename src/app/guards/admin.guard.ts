import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { inject } from '@angular/core';
export const adminGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const auth=inject(AuthentificationService);
  if(auth.isadminstrateur())
  {
    return true;
  }else
  {
    router.navigate(['/']);
    return false;
  }
};

