import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public user: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public isConnected: boolean;
    constructor() { }

    setUser(value: string) {
        this.user.next(value);
        //Si l'utilisateur a rentré son Pseudo il se connecte
        this.isConnected = value ? true : false;
    }

}