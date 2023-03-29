import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
enum status {
  PENDDING,
  FAVOURITE,
  DONE,
  DELETED
}
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {
  id!: number;
  todo!: any;
  status!: string;
  constructor(private _ActivatedRoute: ActivatedRoute, private _TodosService: TodosService) {
    this.id = this._ActivatedRoute.snapshot.params['id'];

    this._TodosService._todo.subscribe(() => {

      this.todo = this._TodosService.getTodoDetails(this.id);
      /*    this.status = this.todo.status! == status.PENDDING ? "PENDDING" :
           this.todo.status == status.DONE ? " completed" :
             this.todo.status == status.FAVOURITE ? "Favourite" :
               this.todo.status == status.DELETED ? "Deleted" : "none"; */
    })
  }



}
