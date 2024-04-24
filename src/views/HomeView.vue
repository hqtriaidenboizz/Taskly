<script setup lang="ts">
import BaseTaskCard from '@/components/common/BaseTaskCard.vue';
import FormCreateTask from '@/components/home/FormCreateTask.vue';
import { TASK_STATUS } from '@/constants/taskStatus';
import useTaskStore from '@/stores/tasks';
import { TaskImportance, TaskStatus, type Task, type TaskStatusColumn } from '@/types';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

const { tasks, loading, error } = storeToRefs(useTaskStore())
const { getTasks, createTask,deleteTask } = useTaskStore()

const taskStatus = ref<TaskStatusColumn[]>(TASK_STATUS || [])
const groupedTasks = computed(() => {
    const grouped: Record<TaskStatus, Task[]> = {
        [TaskStatus.Start]: [],
        [TaskStatus.Progress]: [],
        [TaskStatus.Done]: [],
    };

    tasks.value.forEach(task => {
        grouped[task.status].push(task);
    });

    return grouped;
});

getTasks()
</script>

<template>
    <div class="container">
        <div class="tasks">
            <div v-for="status in taskStatus" class="tasks-column" :key="status.id">
                <div class="column-name">{{ status.name }}</div>
                <VueDraggableNext class="task-cards" group="task">
                    <FormCreateTask  v-if="status.type === TaskStatus.Start" @createTask="createTask"/>
                    <BaseTaskCard
                        v-for="task in groupedTasks[status.type]"
                        :key="task.id"
                        v-bind="task"
                        @deleteTask="deleteTask"
                    />
                </VueDraggableNext>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tasks {
    display: flex;
    justify-content: space-between;
    gap: 100px;

    & .tasks-column {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;

        & .task-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
            height: 600px;
            padding: 20px 4px;
            background: none;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                display: none;
            }

        }

        & .column-name {
            font-size: var(--text-xl);
            font-weight: var(--font-bold)
        }
    }
}
</style>
