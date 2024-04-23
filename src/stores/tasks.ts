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

    return {
        tasks,
        loading,
		error,
        getTasks,

    };
});

export default useTaskStore;
