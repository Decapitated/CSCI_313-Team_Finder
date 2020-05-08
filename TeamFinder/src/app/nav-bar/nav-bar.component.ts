import { Component, OnInit } from '@angular/core';
import { Party } from '../party';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  party: Party = {
    id: 0,
    owner: 'headlessdev',
    created: new Date(),
    title: 'Leviathan Raid',
    description: 'I need a full fireteam.',
    game: 'Destiny 2',
    maxPlayers: 6, reservedPlayers: 4,
    members: []
  };

  constructor() { }

  ngOnInit(): void {
  }

  getNumPlayers(): number {
    console.log(1 + this.party.reservedPlayers + this.party.members.length);
    return 1 + this.party.reservedPlayers + this.party.members.length;
  }
}
