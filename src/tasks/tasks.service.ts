import { Injectable } from '@nestjs/common';
import { Tasks, TasksState } from './tasks.entity'
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export default class TasksService {
    private tasks: Tasks[] = [{
        id: '1',
        title: "Trotando",
        state: TasksState.open,
        description: "Esta es una description"
    }]

    getAllTasks() {
        return this.tasks
    }

    createTasks(title: string, description: string) {
        const task = {
            id: uuidv4(),
            title,
            state: TasksState.pending,
            description
        }
        this.tasks.push(task)
        return task
    }

    updateTasks(id: string, title: string, description: string, state: TasksState) {
        const task = {
            id,
            title,
            description,
            state
        }
        let taskFilter = this.tasks.filter(task => task.id != id)
        taskFilter.push(task)
        this.tasks = taskFilter 

        return task
    }
    
    deleteTasks(id: string) {
        this.tasks = this.tasks.filter(task => task.id != id)   
        return "Eliminado"
    }
}
