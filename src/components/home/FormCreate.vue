<script setup lang="ts">
import { TaskImportance, TaskStatus, type Task } from '@/types';
import { reactive } from 'vue';

const Props = defineProps({
    onSubmit: Function
})

const form = reactive<Task>({
    title: '',
    status: TaskStatus.Start,
    importance: TaskImportance.Low
})

const handleSubmit = () => {
    if (Props.onSubmit) {
        Props.onSubmit(form);
    }
    form.title = '';
};

</script>
<template>
    <div class="form">
        <form @submit.prevent="handleSubmit">
            <input id="title" v-model="form.title" class="input-form" type="text" placeholder="Create task">
        </form>
    </div>
</template>
<style lang="scss" scoped>
.form {
    background-color: var(--yellow-200);
    border-radius: 20px;
    padding: 20px;
    border: 2px dashed var(--gray-300);
}

.input-form {
    outline: none;
    border: none;
    background: none;
    width: 100%;
    font-family: var(--font-red-hat-display);
    font-weight: var(--font-medium);
    font-size: var(--text-base);
}
</style>
