import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ToDoContainerComponent} from '../componets/todoContainer.component';
import {ToDoItemComponent} from '../componets/todoItem.component';
import {ToDoItemService} from '../services/todoItem.service';


import {AppRoutingModule} from './appRouting.module';

@NgModule({
  declarations: [
    ToDoContainerComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ToDoItemService],
  bootstrap: [ToDoContainerComponent]
})

export class ToDoContainer {
}
