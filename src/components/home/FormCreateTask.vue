<script setup lang="ts">
import { TaskImportance, TaskStatus, type Task } from "@/types";
import { reactive } from "vue";
import BaseButton from "../common/BaseButton.vue";

const emit = defineEmits<{ createTask: [form: Task] }>();

const form = reactive<Task>({
    title: "",
    status: TaskStatus.Start,
    importance: TaskImportance.Low,
});

const handleSubmit = () => {
    emit("createTask", form);
    resetForm();
};

const resetForm = () => {
    form.title = "";
};

</script>
<template>
    <div class="form">
        <form @submit.prevent="handleSubmit">
            <textarea
                id="title"
                v-model="form.title"
                class="input-form"
                placeholder="Create task"
            ></textarea>
            <div class="importance">
                <div>
                    <input
                        type="radio"
                        id="low"
                        value="low"
                        v-model="form.importance"
                    />
                    <label for="one">Low</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="medium"
                        value="medium"
                        v-model="form.importance"
                    />
                    <label for="two">Medium</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="high"
                        value="high"
                        v-model="form.importance"
                    />
                    <label for="two">High</label>
                </div>
            </div>
            <BaseButton>Create</BaseButton>
        </form>
    </div>
</template>
<style lang="scss" scoped>
.form {
    background-color: var(--yellow-200);
    border-radius: 20px;
    padding: 20px;
    border: 2px dashed var(--gray-300);

    & form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    & .importance {
        display: flex;
        flex-direction: row;
        gap: 12px;
    }
}

.input-form {
    outline: none;
    border: none;
    background: none;
    font-family: var(--font-red-hat-display);
    font-weight: var(--font-medium);
    font-size: var(--text-base);
    background-color: rgb(226, 224, 214);
    border-radius: 8px;
    padding: 12px 20px;
}
</style>
