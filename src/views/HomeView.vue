<script setup lang="ts">
import BaseTaskCard from '@/components/common/BaseTaskCard.vue';


</script>

<template>
    <div class="container">
        <div class="tasks">
            <div class="tasks-column">
                <div class="column-name" >To Start</div>
                <BaseTaskCard/>
                <BaseTaskCard/>
                <BaseTaskCard/>

            </div>
            <div class="tasks-column">
                <div class="column-name" >In Progress</div>

                <BaseTaskCard/>

            </div>
            <div class="tasks-column">
                <div class="column-name" >Done</div>

                <BaseTaskCard/>

            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.tasks{
    display: flex;
    justify-content: space-between;
    gap: 100px;

    & .tasks-column{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        & .column-name {
            font-size: var(--text-xl);
            font-weight: var(--font-bold)
        }
    }
}
</style>
