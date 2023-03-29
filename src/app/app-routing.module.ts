import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', canActivate: [AuthGuard], component: TodosComponent },
  { path: 'favourite-todos', canActivate: [AuthGuard], component: FavouritesComponent },
  { path: 'deleted-todos', canActivate: [AuthGuard], component: DeletedTodosComponent },
  { path: 'completed-todos', canActivate: [AuthGuard], component: CompletedTodosComponent },
  { path: 'todoDetails/:id', canActivate: [AuthGuard], component: TodoDetailsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
