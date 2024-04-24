<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { CaptionsOff } from 'lucide-vue-next';
import BaseAvatar from '@/components/common/BaseAvatar.vue';
import { TaskImportance } from '@/types';

const props = defineProps({
    id: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    importance: {
        type: String as () => TaskImportance,
        required: true
    },
    deleteCard: Function
})

const handleDelete = (id?: string) => {
    if (props.deleteCard) {
        props.deleteCard(id)
    }
}

</script>
<template>
    <div class="card-container">
        <div class="card-header">
            <div class="importance" :class="props.importance"></div>
            <BaseButton>
                <CaptionsOff :size=16 @click="handleDelete(props.id)" />
            </BaseButton>
        </div>
        <div class="card-content">
            <div class="card-title">
                {{ props.title }}
            </div>
            <div class="card-deadline">
                Apr 27, 2024
            </div>
        </div>
        <div class="card-footer">
            <div>8 comments</div>
            <BaseAvatar width="28px" height="28px" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: var(--white);
    border-radius: 28px;
    cursor: pointer;
    box-shadow: var(--shadow);
    padding: 24px;

    & .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & .importance {
            min-width: 60px;
            height: 6px;
            border-radius: 4px;
        }

        & .low {
            background-color: var(--blue-100)
        }

        & .medium {
            background-color: var(--yellow-100)
        }

        & .high {
            background-color: var(--red-100)
        }
    }

    & .card-content {
        display: flex;
        flex-direction: column;
        gap: 10px;

        & .card-title {
            font-size: var(--text-base);
            font-weight: var(--font-bold);
            line-height: 24px;
        }

        & .card-deadline {
            background-color: var(--gray-200);
            font-size: 12px;
            padding: 6px;
            font-weight: var(--font-bold);
            border-radius: 8px;
            align-self: flex-start;
        }

    }

    & .card-footer {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        align-items: center;
        font-size: var(--text-base);
        color: var(--gray-100);
        font-weight: var(--font-medium)
    }

}
</style>