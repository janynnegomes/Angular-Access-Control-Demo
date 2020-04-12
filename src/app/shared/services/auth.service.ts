import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) { 
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get payload(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        debugger
        console.log(`${environment.apiUrl}/login`)
        
        return this.http.post<any>(`${environment.apiUrl}/login`, { email:email, password:password })
            .pipe(map(user => {
                console.log(user)
                if (user && user.token) {
                    localStorage.setItem('user', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
    }

}