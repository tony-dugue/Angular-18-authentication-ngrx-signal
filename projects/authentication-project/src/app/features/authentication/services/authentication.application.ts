import { effect, inject, Injectable, Signal } from "@angular/core";
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

  /**
   * Méthode de connexion pour authentifier l'utilisateur
   * @param login 
   * @param password 
   */
  login(login: string, password: string) {
    this.store.logIn({ login, password })
  }

  /**
   * Accesseur pour savoir si le processus de connexion est en cours.
   * @returns Un signal qui émet une valeur booléenne indiquant si le chargement est en cours.
   */
  get isLoading(): Signal<boolean> {
    return this.store.isLoading
  }

    /**
   * Accesseur pour savoir si l'utilisateur est authentifié.
   * @returns Un signal qui émet une valeur booléenne indiquant si l'utilisateur est authentifié.
   */
    get isAuthenticated(): Signal<boolean> {
      return this.store.isAuthenticated
    }
}
