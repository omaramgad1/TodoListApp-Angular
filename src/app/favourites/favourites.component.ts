import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  todos: any[] = [];
  constructor(private todosService: TodosService) {
    this.todosService._todo.subscribe(() => {

      this.todos = this.todosService.getFavourite()

    });

  }



}
