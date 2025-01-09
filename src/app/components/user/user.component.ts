import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent 
{
  /*
    La forma clasica seria:

      @Input({required: true}) user!: User;

      get imagePath()
      {
        return 'assets/users/' + this.user().avatar;
      }

    Pero vamos a hacerlo con Signals.
  */

  user = input.required<User>();
  selectedUser = output<string>(); //Parece que si por el formato, pero el output no crea una signal
  // La forma antigua seria: @Output() seletedUser = new EventEmitter<string>();

  /*
    Falta indicar que las Signals son inmutables.
    Por lo que, para cambiarlas, si son objetos, hay que cambiarlas completamente, no un atributo concreto:

    this.user.set(new User ());
  */
  
  imagePath = computed (()=>
  {
    return 'assets/users/' + this.user().avatar;
  });

  usuarioSeleccionado(userId: string)
  {
    this.selectedUser.emit(userId);
  }
}
