import { IsString,IsIn } from 'class-validator'
import {TasksState} from '../tasks.entity'

export class CreateTasksDTO {
    @IsString()
    title: string
    
    @IsString()
    description: string
}

export class UpdateTasksDTO {
    @IsString()
    title: string
    
    @IsString()
    description: string

    @IsIn([TasksState.close,TasksState.open,TasksState.pending])
    state: TasksState
}
