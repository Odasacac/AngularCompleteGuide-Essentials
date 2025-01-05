import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../others/dummy-users';
import { User } from '../../interfaces/user';

const numeroAleatorio = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent 
{
  protected selectedUser = signal(DUMMY_USERS[numeroAleatorio]);
  
  protected imagePathSignals = computed(() => 'assets/users/' + this.selectedUser().avatar);

  /*
  get imagePath(): string
  {
    return 'assets/users/' + this.selectedUser().avatar;
  }
  */


  usuarioSeleccionado(usuario: User)
  {
    const numeroAleatorio = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[numeroAleatorio]);
  }
}
