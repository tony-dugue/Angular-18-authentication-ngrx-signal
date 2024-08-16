import { Injectable } from "@angular/core";
import { AuthenticationUser } from "../models/authentication-user";
import { delay, Observable, of } from "rxjs";

const fakeService: AuthenticationInfrastructure = {
  login(email, password): Observable<AuthenticationUser> {
    const user: AuthenticationUser = { surname: 'Chewie'}
    return of(user).pipe(delay(1500))
  }
}

@Injectable({ 
  providedIn: 'root',
  useValue: fakeService
})
export class AuthenticationInfrastructure {
  login(email: string, password: string): Observable<AuthenticationUser> {
    throw new Error('Not implemented exception')
  }
}

