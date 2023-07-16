import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import TasksService from './tasks.service';
import { CreateTasksDTO, UpdateTasksDTO } from './dto/tasks.dto'

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask: CreateTasksDTO) {
        return this.tasksService.createTasks(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        return this.tasksService.deleteTasks(id)
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body() taskUpdate: UpdateTasksDTO){
        return this.tasksService.updateTasks(id,taskUpdate.title,taskUpdate.description,taskUpdate.state)
    }
}
