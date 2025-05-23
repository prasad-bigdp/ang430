import { CanActivateFn } from '@angular/router';

export const myguardGuard: CanActivateFn = (route, state) => {
  console.log(route.url)
  return false;
};
