import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../party';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() party: Party;
  @Input() joined = false;

  constructor() { }

  ngOnInit(): void {
  }

  getNumPlayers(): number {
    return 1 + this.party.reservedPlayers + this.party.members.size;
  }
}
