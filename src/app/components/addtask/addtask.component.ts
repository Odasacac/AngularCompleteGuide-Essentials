import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent 
{
  userId = input.required<string>();
  backToApp = output<void>();
  private tasksService = inject(TasksService);

  camposFormulario = 
  {
    title: new FormControl (''),
    dueDate: new FormControl (''),
    summary: new FormControl ('')
  }

  public addTaskForm: FormGroup = new FormGroup(this.camposFormulario);

  addTask()
  {
    const formData: TaskFormData = this.addTaskForm.value;

    const newTask: Task =
    {
      id: "",
      userId: this.userId(),
      title: formData.title,
      dueDate: formData.dueDate,
      summary: formData.summary,
      completed: false
    }

    this.tasksService.addTask(newTask);
    this.closeAddTask();
  }

  closeAddTask()
  {
    this.backToApp.emit();
  }
}


interface TaskFormData
{
  title: string
  dueDate: string
  summary: string
}
