import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.scss']
})
export class DeletedTodosComponent {
  todos: any[] = [];
  constructor(private todosService: TodosService) {
    this.todosService._todo.subscribe(() => {

      this.todos = this.todosService.getDeleted()

    });

  }
}
