import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemCraftComponent } from './item-craft/item-craft.component';
import { FactionsComponent } from './factions/factions.component';

const routes: Routes = [
   { path: '', component: ItemsListComponent },
   { path: 'item/:id', component: ItemCraftComponent },
   { path: 'factions', component: FactionsComponent },
   { path: '**', redirectTo: '' }
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {

}