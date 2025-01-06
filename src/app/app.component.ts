import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './others/dummy-users';
import { User } from './interfaces/user';
import { CommonModule } from '@angular/common';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  users: User[] = DUMMY_USERS;

  user: User = DUMMY_USERS[0];

  usuarioSeleccionado(id: string)
  {
    const usuarioEncontradoPorId = this.users.find (user => user.id === id);

    if (usuarioEncontradoPorId != null)
    {
      this.user = usuarioEncontradoPorId
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


}


