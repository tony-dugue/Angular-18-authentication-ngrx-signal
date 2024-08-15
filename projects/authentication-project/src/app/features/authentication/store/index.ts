import { AuthenticationUser } from '../models/authentication-user';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { pipe, tap } from 'rxjs';

// Etape 1 : Etat à créer
export interface AuthenticationState {
  user: AuthenticationUser | undefined | null;
  isLoading: boolean;
}

export type AuthenticateType = {
  login: string,
  password: string
}

// Etape 2 : Valeur initiale
const initialValue: AuthenticationState = {
  user: undefined,
  isLoading: false,
};

// Etape 3 : Reducer / store ...
export const AuthenticationStore = signalStore(
  { providedIn: 'root'},
  withState(initialValue),
  withMethods(store => (
    {
      // Méthodes à ajouter ici ...
      logIn: rxMethod<AuthenticateType>(
        pipe(
          tap(() => patchState(store, { isLoading: true }))
        )
      )
    }
  ))
)
