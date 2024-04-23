<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    variant: {
        type: String,
        default: 'default',
    }
})

const computedClasses = computed(() => {
    return `btn btn-${props.variant}`
})

</script>

<template>
    <button :class="computedClasses">
        <slot name="iconLeft"></slot>
        <slot></slot>
        <slot name="iconRight"></slot>
    </button>
</template>

<style scoped lang="scss" >
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background: none;
    border-radius: 4px;
}
.btn-icon{
    background-color: var(--white);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    box-shadow: var(--shadow);
    font-size: 12px;
}
</style>
