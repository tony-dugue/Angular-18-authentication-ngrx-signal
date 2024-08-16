import { Injectable } from "@angular/core";
import { AuthenticationUser } from "../models/authentication-user";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthenticationInfrastructure {
  login(email: string, password: string): Observable<AuthenticationUser> {
    throw new Error('Not implemented exception')
  }
}

