import { Component, Input } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() toDos: any[] = [];
  constructor(private _todosService: TodosService) {


  }


  complete(toDo: any): void {

    this._todosService.combleteTodo(toDo)
  }
  favorite(toDo: any): void {
    this._todosService.makeFavTodo(toDo)

  }
  Delete(toDo: any): void {
    this._todosService.deleteToDo(toDo)

  }
  backToPendding(toDo: any) {
    this._todosService.backToPendding(toDo)

  }
  removeTodo(toDo: any) {
    this._todosService.removeTodo(toDo)

  }
}
