import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
enum status {
  PENDDING,
  FAVOURITE,
  DONE,
  DELETED
}
@Injectable({
  providedIn: 'root'
})

export class TodosService {
  currentUser: any;
  data: any = localStorage.getItem('AllTodos');
  allToDos: any[] = JSON.parse(this.data) || [];
  _todo = new BehaviorSubject<any[]>(this.allToDos);

  constructor(private _users: AuthService) {
    _users.currentUser.subscribe(() => {
      this.currentUser = this._users.currentUser.getValue();
    })
  }

  getPendding() {

    return this._todo.getValue().filter(todos => todos.status == status.PENDDING && todos.userId == this.currentUser.id);
  }

  getFavourite() {

    return this._todo.getValue().filter(todos => todos.status == status.FAVOURITE && todos.userId == this.currentUser.id);
  }

  getCompleted() {

    return this._todo.getValue().filter(todos => todos.status == status.DONE && todos.userId == this.currentUser.id);
  }

  getDeleted() {

    return this._todo.getValue().filter(todos => todos.status == status.DELETED && todos.userId == this.currentUser.id);
  }

  addToDo(newTodo: string): void {


    this.allToDos.push(
      {
        userId: this.currentUser.id,
        id: this.allToDos.filter(x => x.userId == this.currentUser.id).length ? this.allToDos.filter(x => x.userId == this.currentUser.id).length + 1 : 1,
        title: newTodo,
        status: status.PENDDING,
      }
    )
    localStorage.setItem('AllTodos', JSON.stringify(this.allToDos));

    this._todo.next(Object.assign([], this.allToDos));

  }

  deleteToDo(todod: any): void {


    this.allToDos[this.allToDos.findIndex(todo => todo.userId === this.currentUser.id && todo.id === todod.id)].status = status.DELETED

    localStorage.setItem('AllTodos', JSON.stringify(this.allToDos));
    this._todo.next(Object.assign([], this.allToDos));

  }
  combleteTodo(todod: any): void {

    this.allToDos[this.allToDos.findIndex(todo => todo.userId === this.currentUser.id && todo.id === todod.id)].status = status.DONE

    localStorage.setItem('AllTodos', JSON.stringify(this.allToDos));
    this._todo.next(Object.assign([], this.allToDos));




  }
  makeFavTodo(todod: any): void {
    this.allToDos[this.allToDos.findIndex(todo => todo.userId === this.currentUser.id && todo.id === todod.id)].status = status.FAVOURITE/*  */

    localStorage.setItem('AllTodos', JSON.stringify(this.allToDos));
    this._todo.next(Object.assign([], this.allToDos));
  }

  backToPendding(todod: any): void {
    this.allToDos[this.allToDos.findIndex(todo => todo.userId === this.currentUser.id && todo.id === todod.id)].status = status.PENDDING

    localStorage.setItem('AllTodos', JSON.stringify(this.allToDos));
    this._todo.next(Object.assign([], this.allToDos));
  }

  removeTodo(todod: any): void {
    this.allToDos.splice(this.allToDos.findIndex(todo => todo.userId === this.currentUser.id && todo.id === todod.id), 1)

    localStorage.setItem('AllTodos', JSON.stringify(this.allToDos));
    this._todo.next(Object.assign([], this.allToDos));
  }
}
