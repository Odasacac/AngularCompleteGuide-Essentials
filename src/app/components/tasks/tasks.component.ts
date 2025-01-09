import { Component, input, output } from '@angular/core';
import { User } from '../../interfaces/user';
import { Task } from '../../interfaces/task';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent 
{
  user = input.required<User>();
  userTasks = input.required<Task[]>();
  userIdParaNewTask = output<string>();
  

  get userSelectedTasks()
  {
    return this.userTasks().filter((task) => task.userId == this.user().id);
  }

  addTask(userId: string)
  {
    this.userIdParaNewTask.emit(userId);
  }

  tareaCompletada(tareaId: string)
  {
    for (let task of this.userSelectedTasks)
    {
        if (task.id == tareaId)
        {
          task.completed=true;
          break;
        }
    }
  }
}
