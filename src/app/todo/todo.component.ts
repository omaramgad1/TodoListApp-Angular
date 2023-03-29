import { Component, Input } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() toDos: any[] = [];
  todo!: any;
  constructor(private _todosService: TodosService) {


  }
  saveToSend(todo: any): void {
    this.todo = todo;

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
  removeTodo() {
    this._todosService.removeTodo(this.todo)


  }
}
