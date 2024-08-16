import { effect, inject, Injectable } from "@angular/core";
import { AuthenticationStore } from "../store";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore)
  private readonly router = inject(Router)

  private redirectToLoginEffect = effect(() => {
    if (this.store.isAuthenticated()) {
      // Si je suis authentifié, je pars vers la page d'accueil
      this.router.navigate(['home'])
    }
  })

  login(login: string, password: string) {
    this.store.logIn({ login, password })
  }
}
