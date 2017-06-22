import {Component, Input} from '@angular/core';

import { ToDoItem } from '../ts/ToDoItem';

@Component({
  selector: 'todo-item',
  templateUrl: '../templates/toDoItem.component.html',
  styleUrls: ['../css/toDoItem.component.css']
})

export class ToDoItemComponent {
  @Input() todoItem: ToDoItem;
}
