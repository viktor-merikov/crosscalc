import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  factions: any;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getFactions().subscribe(data => this.factions = data);
  }

}
