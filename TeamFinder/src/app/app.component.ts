import { Component } from '@angular/core';
import { Party } from './party';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamFinder';
  party: Party = {
    id: 0,
    owner: 'headlessdev',
    created: new Date(),
    title: 'Leviathan Raid',
    description: 'I need a full fireteam.',
    game: 'Destiny 2',
    maxPlayers: 6, reservedPlayers: 2,
    members: ['joe_demajio']
  };
}
