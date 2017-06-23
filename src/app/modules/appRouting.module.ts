import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ToDoItemComponent} from '../componets/todoItem.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: ToDoItemComponent},
  {path: 'todos', component: ToDoItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
