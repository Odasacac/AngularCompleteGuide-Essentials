import { Component, input, output } from '@angular/core';
import { dummyTasks } from '../../others/dummy-tasks';
import { Task } from '../../interfaces/task';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent 
{
  userId = input.required<string>();
  backToApp = output();
  tareas: Task[] = dummyTasks;

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
      id: "t" + (this.tareas.length +1),
      userId: this.userId(),
      title: formData.title,
      dueDate: formData.dueDate,
      summary: formData.summary,
      completed: false
    }

    this.tareas.push(newTask);
    this.backToApp.emit();
  }

  noTask()
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
