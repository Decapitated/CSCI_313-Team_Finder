import { Injectable } from '@angular/core';
import { PARTIES } from './mock-parties';
import { Party } from './party';


@Injectable({
  providedIn: 'root'
})
export class PartyService {
  parties: Party[] = PARTIES;
  recentParties: Party[];
  almostFullParties: Party[];
  constructor() {
    this.getRecentParties();
    this.getAlmostFullParties();
  }

  getRecentParties() {
    this.recentParties = this.parties.sort((party1, party2) => {
      if (party1.created > party2.created) {
          return 1;
      }

      if (party1.created < party2.created) {
          return -1;
      }

      return 0;
    });
    console.log(this.recentParties);
  }

  getAlmostFullParties() {
    this.almostFullParties = this.parties.filter(
      (party: Party) => {
        console.log(`(${1 + party.reservedPlayers + party.members.length}) === (${party.maxPlayers - 1})`);
        return (1 + party.reservedPlayers + party.members.length) === (party.maxPlayers - 1);
      });
  }
}
