import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {

  items = [];
  subscription: Subscription;
  loading = true;
  p: number = 1;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.subscription = this.itemsService.getAllItems().subscribe((data: any) => {
      this.itemsService.setCurrentItems(data);
      this.items = data;
      this.loading = false;
    });
  }

  onChange = ({ target }) => {
    const value = target.value.toLowerCase();
    if (value) {
      this.items = this.itemsService.getCurrentItems().filter(item => item.name.toLowerCase().includes(value)) || null;
    } else {
      this.items = this.itemsService.getCurrentItems();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
