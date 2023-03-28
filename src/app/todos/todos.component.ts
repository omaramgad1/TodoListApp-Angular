import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from '../todos.service';
enum status {
  PENDDING,
  FAVOURITE,
  DONE,
  DELETED
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  inputToDoText: string = "";

  todos: any[] = [];
  constructor(private todosService: TodosService) {

    this.todosService._todo.subscribe(() => {

      this.todos = this.todosService.getPendding()

    });
  }



  addToDo(inputToDoText: string) {
    if (inputToDoText.trim() != '') {
      this.todosService.addToDo(inputToDoText)
      this.inputToDoText = ""
    }
    else {
      alert("Please enter Todo");


    }



  }



}
