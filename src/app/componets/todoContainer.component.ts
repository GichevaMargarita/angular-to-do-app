import {Component, OnInit} from '@angular/core';

import { ToDoItem } from '../ts/ToDoItem';
import { ToDoItemService } from '../services/todoItem.service';

@Component({
  selector: 'todo-container',
  templateUrl: '../templates/toDoContainer.component.html',
  styleUrls: ['../css/toDoContainer.component.css'],
  providers: [ToDoItemService]
})

export class ToDoContainerComponent implements OnInit {
  todoHeader = 'Shopping List';
  todoItemsList: ToDoItem[] = [];

  constructor(private toDoItemService: ToDoItemService) { }

  ngOnInit(): void {
    this.toDoItemService.getToDoItems().then(todoItemsList => this.todoItemsList = todoItemsList);
  }
  // toggleItemState(todoItem: ToDoItem): void {
  //   const currentValue = todoItem.isDone;
  //   todoItem.isDone = !currentValue;
  // }
}
