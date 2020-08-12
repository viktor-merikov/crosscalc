import { Component, OnInit } from '@angular/core';
import { FACTIONS } from './factions';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {

  factions = FACTIONS;

  constructor() { }

  ngOnInit() {
  }

}
