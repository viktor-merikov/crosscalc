import { Component, OnInit, Input } from '@angular/core';
import { IMAGE_URL } from '../constants/constants';
import { Router } from '@angular/router';
import { RARITY_COLORS } from "../constants/rarity-colors";


@Component({
  selector: 'app-items-list-item',
  templateUrl: './items-list-item.component.html',
  styleUrls: ['./items-list-item.component.css']
})
export class ItemsListItemComponent implements OnInit {

  imageUrl = IMAGE_URL;
  color = 'yellow';

  @Input() item: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.color = RARITY_COLORS[this.item.rarityName.toUpperCase()];
  }

  onClick = (id) => {
    this.router.navigate([`item/${id}`]);
  }

}
