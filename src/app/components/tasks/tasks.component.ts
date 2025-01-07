import { Component, input, output } from '@angular/core';
import { User } from '../../interfaces/user';
import { Task } from '../../interfaces/task';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../../others/dummy-tasks';


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
  completedTaskId = output<string>();

  addTask(userId: string)
  {
    const newTask =
    {
      id: userId,
      ownerId: userId,
      title: "",
      dueDate: "",
      content: "",
      completed: false
    }
  }

  tareaCompletada(tareaId: string)
  {
    this.completedTaskId.emit(tareaId);
   
  }
}
