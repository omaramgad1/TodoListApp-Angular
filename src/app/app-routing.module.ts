import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
{path:'' ,redirectTo: 'todos', pathMatch: 'full'},
{path:'todos' , component: TodosComponent},
{path:'login' , component: LoginComponent},
{path:'register' , component: RegisterComponent},
{path:'favourite-todos' , component: FavouritesComponent},
{path:'deleted-todos' , component: DeletedTodosComponent},
{path:'completed-todos' , component: CompletedTodosComponent},
{path:'**' , component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
