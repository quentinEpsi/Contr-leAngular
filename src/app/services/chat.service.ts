import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message} from "../interfaces/message";
import { Channel } from "../interfaces/channel";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    constructor(private http: HttpClient) { }

    getChannels(): Observable<any> {
        return this.http.get('http://localhost:3000/channels');
    }

    getMessages(idChannel: string): Observable<any> {
        return this.http.get('http://localhost:3000/channels' + '/' + idChannel + '/messages');
    }

    setMessage(idChannel: string, body: Message) {
        return this.http.post('http://localhost:3000/channels' + '/' + idChannel + '/messages', body);
    }
}