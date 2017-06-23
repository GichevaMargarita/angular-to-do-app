import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToDoContainerComponent } from '../componets/todoContainer.component';
import { ToDoItemComponent } from '../componets/todoItem.component';

@NgModule({
  declarations: [
    ToDoContainerComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ ToDoContainerComponent ]
})

export class ToDoContainer { }
