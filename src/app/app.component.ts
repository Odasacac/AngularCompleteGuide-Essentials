import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './others/dummy-users';
import { User } from './interfaces/user';
import { TasksComponent } from "./components/tasks/tasks.component";
import { dummyTasks } from './others/dummy-tasks';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  users: User[] = DUMMY_USERS;

  userTasks: Task[] = [];

  user: User = 
  {
    id: "",
    name: "",
    avatar: ""
  }

  usuarioSeleccionado(id: string)
  {
    const usuarioEncontradoPorId = this.users.find (user => user.id === id);

    if (usuarioEncontradoPorId != null)
    {
      this.user = usuarioEncontradoPorId
      this.userTasks = dummyTasks.filter(task => task.userId== usuarioEncontradoPorId.id);
    }

    /*
      El metodo find busca y se para cuando encuentra el primer elemento que cumple la condicion
      Tambien se puede hacer con un bucle while:

      let usuarioEncontrado: boolean = false;
      let i = 0;
  
      while (i < this.users.length && usuarioEncontrado == false)
      {
        if (this.users[i].id === id) 
        {
          this.user = this.users[i];
          usuarioEncontrado = true;
        }
        i++;
      }
    */
  }

  tareaCompletada(tareaId: string)
  {
    for (let task of this.userTasks)
    {
      if (task.id == tareaId)
      {
        task.completed=true;
        break;
      }
    }
  }

}


