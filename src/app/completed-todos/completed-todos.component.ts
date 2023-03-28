import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent {
  todos: any[] = [];
  constructor(private todosService: TodosService) {
    this.todosService._todo.subscribe(() => {

      this.todos = this.todosService.getCompleted()

    });

  }
}
