<script setup>
import TheHeader from '@/components/common/TheHeader.vue';
</script>

<template>
    <div>
        <TheHeader/>
        <main>
            <slot/>
        </main>
    </div>
</template>