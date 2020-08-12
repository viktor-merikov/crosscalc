import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsListItemComponent } from './items-list-item/items-list-item.component';
import { ItemCraftComponent } from './item-craft/item-craft.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { FactionsComponent } from './factions/factions.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemsListComponent,
    ItemsListItemComponent,
    ItemCraftComponent,
    SpinnerComponent,
    FactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
