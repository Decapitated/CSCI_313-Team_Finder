import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../party';
import { PartyService } from '../party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  @Input() party: Party;
  joinedParty = false;
  viewParty = false;
  reserved: number[] = [];
  waiting: number[] = [];
  constructor(private partyService: PartyService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.party.reservedPlayers; i++) {
      this.reserved.push(0);
    }
    const numPlayers = 1 + this.party.reservedPlayers + this.party.members.size;
    for (let i = 0; i < this.party.maxPlayers - numPlayers; i++){
      this.waiting.push(0);
    }
  }

  openViewer(){
    this.viewParty = !this.viewParty;
  }

  joinParty() {
    this.partyService.joinParty(this.party, 'headlessdev');
    this.joinedParty = true;
  }

  leaveParty() {
    this.partyService.leaveParty(this.party, 'headlessdev');
    this.joinedParty = false;
  }
}
