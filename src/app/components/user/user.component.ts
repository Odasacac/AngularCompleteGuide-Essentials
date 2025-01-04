import { Component } from '@angular/core';
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
  protected selectedUser: User = DUMMY_USERS[numeroAleatorio];
}
