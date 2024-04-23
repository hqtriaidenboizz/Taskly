<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import { Ellipsis } from 'lucide-vue-next';

</script>
<template>
    <div class="card-container">
        <div class="card-header">
            <div class="importance" </div>
                <BaseButton>
                    <Ellipsis size="16" />
                </BaseButton>
            </div>
            <div class="card-content">
                <div class="card-title">
                    Do it for your team Do it for your teamDo it for your team
                </div>
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
            background-color: var(--blue-100)
        }
    }
    & .card-content{
        display: flex;
        flex-direction: column;
        & .card-title{
            font-size: var(--text-base);
            font-weight: var(--font-bold);
            line-height: 24px;
        }

    }

}
</style>