import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit() {
      this.chatService.getChannels();
  }
}
