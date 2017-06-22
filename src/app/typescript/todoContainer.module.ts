import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToDoContainerComponent } from './todoContainer.component';

@NgModule({
  declarations: [
    ToDoContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ToDoContainerComponent]
})

export class ToDoContainer { }
