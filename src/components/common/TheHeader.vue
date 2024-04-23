<script setup>
import LogoBrand from '@/components/common/LogoBrand.vue';
import BaseAvatar from '@/components/common/BaseAvatar.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { BellDot } from 'lucide-vue-next';

</script>
<template>
    <div class="container">
        <RouterLink to="/">
            <LogoBrand/>
        </RouterLink>
        <div class="header-right">
            <div class="user">
                <span>
                    Keepitinyoureyes
                </span>
                <BaseAvatar variant="outline"/>
            </div>
            <BaseButton variant="icon"><BellDot size="20"/></BaseButton>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    display: flex;
    padding: 40px 0;
    justify-content: space-between;
    align-items: center;
    & .header-right{
        display: flex;
        align-items: center;
        gap: 20px;
        & .user {
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: var(--font-medium);
            color: var(--gray-100)
        }
    }
}

</style>