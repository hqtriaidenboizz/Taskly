export interface Task {
    id?: string;
    title: string;
    status: TaskStatus;
    importance: TaskImportance;
}

export enum TaskStatus {
    Start = "start",
    Progress = "progress",
    Done = "done",
}

export enum TaskImportance {
    Low = "low",
    Medium = "medium",
    High = "high",
}

export interface TaskStatusColumn {
    id: number;
    name: string;
    type: TaskStatus;
}
