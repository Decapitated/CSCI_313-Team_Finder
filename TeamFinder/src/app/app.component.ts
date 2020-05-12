import { Component, OnInit } from '@angular/core';
import { Party } from './party';
import { PartyService } from './party.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TeamFinder';
  party: Party = {
    id: 0,
    owner: 'headlessdev',
    created: new Date(),
    title: 'Leviathan Raid',
    description: 'I need a full fireteam.',
    game: 'Destiny 2',
    maxPlayers: 6, reservedPlayers: 2,
    members: new Set<string>().add('joe_demajio')
  };

  recentParties: Party[];
  almostFullParties: Party[];
  constructor(private partyService: PartyService){}

  ngOnInit(): void {
    this.recentParties = this.partyService.recentParties;
    this.almostFullParties = this.partyService.almostFullParties;

    this.partyService.joinedParty.subscribe((party: Party) => {
      this.party.members.delete('headlessdev');
      this.party = party;
    });

    this.partyService.leftParty.subscribe((party: Party) => {
      this.party.members.delete('headlessdev');
      this.party = undefined;
    });
  }
}
