import { Component, inject, input, output } from '@angular/core';
import { User } from '../../interfaces/user';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent 
{
  user = input.required<User>();

  userIdParaNewTask = output<string>();
  tasksService = inject(TasksService);
  

  get userSelectedTasks()
  {
    return this.tasksService.getUserTasks(this.user().id);
  }

  addTask(userId: string)
  {
    this.userIdParaNewTask.emit(userId);
  }

  completedTask(tareaId: string)
  {
    this.tasksService.completedTask(tareaId);
  }
}
