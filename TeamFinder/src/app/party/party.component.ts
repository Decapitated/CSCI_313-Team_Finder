import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../party';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  @Input() party: Party;
  viewParty = false;
  reserved: number[] = [];
  waiting: number[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.party.reservedPlayers; i++) {
      this.reserved.push(0);
    }
    const numPlayers = 1 + this.party.reservedPlayers + this.party.members.length;
    for (let i = 0; i < this.party.maxPlayers - numPlayers; i++){
      this.waiting.push(0);
    }
  }

  openViewer(){
    this.viewParty = !this.viewParty;
  }
}
