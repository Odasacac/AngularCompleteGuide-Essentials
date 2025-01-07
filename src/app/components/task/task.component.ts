import { Component, input, output } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent 
{
  task = input.required<Task>();
  completedTaskId = output<string>();

  taskCompleted(taskId: string)
  {
    this.completedTaskId.emit(taskId);
  }
}
