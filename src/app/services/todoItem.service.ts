import { Injectable } from '@angular/core';

import { ToDoItem } from '../ts/ToDoItem';
import { TODOITEMS } from '../ts/ToDoItemsData';

@Injectable()
export class ToDoItemService {
  getToDoItems(): Promise<ToDoItem[]> {
    return Promise.resolve(TODOITEMS);
  }
}
