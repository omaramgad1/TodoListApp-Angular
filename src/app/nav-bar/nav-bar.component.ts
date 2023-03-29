import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  noPendding: number = 0;
  noFav: number = 0;
  noDone: number = 0;
  noDeleted: number = 0;


  currentUser!: any;

  isLoggedIn: boolean = false;
  constructor(private _authService: AuthService, private _todosService: TodosService) {

    _authService.currentUser.subscribe(() => {
      if (_authService.currentUser.getValue() != null) {
        this.isLoggedIn = true;
        this.currentUser = _authService.currentUser.getValue();
      }
      else {
        this.isLoggedIn = false;
      }

      _todosService._todo.subscribe(() => {
        this.noPendding = this._todosService.getNoPendding()
        this.noFav = this._todosService.getNoFavourites()

        this.noDone = this._todosService.getNoCompleted()
        this.noDeleted = this._todosService.getNoDeleted()
      }
      )

    })
  }


  isLogOut(): void {

    this._authService.logout()


  }

}
