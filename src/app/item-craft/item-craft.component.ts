import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../items.service';
import { IMAGE_URL } from '../constants/constants';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-craft',
  templateUrl: './item-craft.component.html',
  styleUrls: ['./item-craft.component.css']
})
export class ItemCraftComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  recipeItem: any;
  imageUrl = IMAGE_URL;


  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(({ id }) => this.itemsService.getRecipeById(id).subscribe((data: any) => this.recipeItem = data.recipe));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
