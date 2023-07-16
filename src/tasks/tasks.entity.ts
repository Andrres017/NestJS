export enum TasksState {
    open = "open",
    close = "close",
    pending = "pending"
}

export class Tasks{
    id: string
    title: string
    description: string
    state: TasksState
}