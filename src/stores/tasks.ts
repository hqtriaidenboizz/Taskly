import axiosRequest from "@/services/api";
import {
    getTasksSevice,
    getTaskSevice,
    createTaskSevice,
    deleteTaskSevice,
    updateTaskSevice,
} from "@/services/tasks-sevices";
import { type Task, TaskImportance, TaskStatus } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

const useTaskStore = defineStore("tasksStore", () => {
    const tasks = ref<Task[]>([]);
    const loading = ref<Boolean>(false);
    const error = ref<any>(null);

    const getTasks = async () => {
        loading.value = true;
        try {
            const res = await getTasksSevice();
            tasks.value = res.data;
        } catch (e) {
			error.value = error
        } finally {
            loading.value = false;
        }
    };

	const createTask = async (newTask: Task) => {
        loading.value = true;
        try {
            const res = await createTaskSevice(newTask);
            tasks.value.push(res.data);
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false;
        }
    };

    const updateTask = async (updatedTask: Task) => {
        loading.value = true;
        try {
            const res = await updateTaskSevice( updatedTask);
            const index = tasks.value.findIndex(t => t.id === updatedTask.id);
            if (index !== -1) {
                tasks.value[index] = res.data; 
            }
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false;
        }
    };

    const deleteTask = async (taskId: string) => {
        loading.value = true;
        try {
            await deleteTaskSevice(taskId);
            tasks.value = tasks.value.filter(task => task.id !== taskId);
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false;
        }
    };

    return {
        tasks,
        loading,
		error,
        getTasks,
		createTask,
		updateTask,
		deleteTask

    };
});

export default useTaskStore;
