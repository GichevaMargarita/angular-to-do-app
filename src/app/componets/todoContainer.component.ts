import {Component} from '@angular/core';

import {ToDoItem} from '../ts/ToDoItem';

const TODOITEMS: ToDoItem[] = [
  {name: 'Item 1', isDone: false},
  {name: 'Item 2', isDone: false},
  {name: 'Item 3', isDone: false},
  {name: 'Item 4', isDone: false},
  {name: 'Item 5', isDone: true},
  {name: 'Item 6', isDone: true},
  {name: 'Item 7', isDone: true},
  {name: 'Item 8', isDone: true}
];

@Component({
  selector: 'todo-container',
  templateUrl: '../templates/toDoContainer.component.html',
  styleUrls: ['../css/toDoContainer.component.css']
})

export class ToDoContainerComponent {
  todoHeader = 'Shopping List';
  todoItemsList = TODOITEMS ;
  // notodoSettings showCompleted

  toggleItemState(todoItem: ToDoItem): void {
    const currentValue = todoItem.isDone;
    todoItem.isDone = !currentValue;
  }
}
