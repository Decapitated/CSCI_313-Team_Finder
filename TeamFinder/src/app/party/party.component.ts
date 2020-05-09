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

  constructor() { }

  ngOnInit(): void {
  }

  openViewer(){
    this.viewParty = !this.viewParty;
  }
}
