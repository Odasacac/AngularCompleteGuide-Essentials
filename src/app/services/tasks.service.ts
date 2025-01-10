import { Injectable } from '@angular/core';
import { dummyTasks } from '../others/dummy-tasks';
import { Task } from '../interfaces/task';

@Injectable({providedIn: 'root'})
export class TasksService 
{

  private tasks: Task[] = dummyTasks;

  getUserTasks(userId:string): Task[]
  {  
    const givenUserTasks = this.tasks.filter((task) => task.userId == userId);
    return givenUserTasks;
  }

  addTask (task: Task)
  {
    task.id = "t" + (this.tasks.length +1);
    this.tasks.unshift(task);
  }

  completedTask (tareaId: string)
  {
    for (let task of this.tasks)
      {
          if (task.id == tareaId)
          {
            task.completed=true;
            break;
          }
      }
  }
}
