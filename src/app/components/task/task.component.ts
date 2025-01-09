import { Component, input, output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe} from '@angular/common'

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
