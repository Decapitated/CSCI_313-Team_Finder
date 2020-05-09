import { Injectable, Output, EventEmitter } from '@angular/core';
import { PARTIES } from './mock-parties';
import { Party } from './party';


@Injectable({
  providedIn: 'root'
})
export class PartyService {
  parties: Party[] = PARTIES;
  recentParties: Party[];
  almostFullParties: Party[];

  @Output() joinedParty = new EventEmitter<Party>();
  @Output() leftParty = new EventEmitter<Party>();

  constructor() {
    this.getRecentParties();
    this.getAlmostFullParties();
  }

  getRecentParties() {
    this.recentParties = this.parties.sort((party1, party2) => {
      if (party1.created > party2.created) {
          return -1;
      }
      if (party1.created < party2.created) {
          return 1;
      }
      return 0;
    });
  }

  getAlmostFullParties() {
    this.almostFullParties = this.parties.filter(
      (party: Party) => {
        return (1 + party.reservedPlayers + party.members.size) === (party.maxPlayers - 1);
      }
    );
  }

  joinParty(party: Party, user: string) {
    party.members.add(user);
    this.joinedParty.emit(party);
  }

  leaveParty(party: Party, user: string) {
    party.members.delete(user);
    this.leftParty.emit(party);
  }
}
