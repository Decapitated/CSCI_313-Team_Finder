import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../../party';

@Component({
  selector: 'app-party-viewer',
  templateUrl: './party-viewer.component.html',
  styleUrls: ['./party-viewer.component.css']
})
export class PartyViewerComponent implements OnInit {

  @Input() joined = false;
  @Input() party: Party;
  /*party: Party = {
    id: 0,
    owner: 'headlessdev',
    created: new Date(),
    title: 'Leviathan Raid',
    description: 'I need a full fireteam.',
    game: 'Destiny 2',
    maxPlayers: 6, reservedPlayers: 2,
    members: []
  };*/
  viewParty = false;

  constructor() { }

  ngOnInit(): void {
  }

  openViewer(){
    this.viewParty = !this.viewParty;
  }
}
