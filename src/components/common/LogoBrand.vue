<script setup>
import TasklyLogo from '@/assets/images/taskly-logo.png'
</script>

<template>
    <div class="logo">
        <img :src="TasklyLogo" alt="task logo" class="taskly-logo"/>
        <div class="name">Taskly</div>
    </div>
</template>

<style lang="scss" scoped>
.logo{
    display: flex;
    gap: 8px;
    align-items: center;
    height: 50px;
    & .taskly-logo{
        height: 100%;
    }
    & .name{
        color: var(--brand);
        font-size: 26px;
        font-weight: var(--font-bold)
    }
}
</style>
