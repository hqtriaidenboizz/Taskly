import { TaskStatus, type TaskStatusColumn } from "@/types";

export const TASK_STATUS: TaskStatusColumn[] = [
    {
        id: 1,
        name: "To Start",
        type: TaskStatus.Start
    },
    {
        id: 2,
        name: "In Progress",
        type: TaskStatus.Progress
    },
    {
        id: 3,
        name: "Done",
        type: TaskStatus.Done
    },
];
