<script setup lang="ts" >
import { computed } from 'vue';
import DefaulAvatar from "@/assets/images/default-avatar.jpg"

const props = defineProps({
    width: {
        type: String,
        default: '30px'
    },
    height: {
        type: String,
        default: '30px'
    },
    url: {
        default: DefaulAvatar
    },
    variant: {
        type: String,
        default: 'default'
    }
})

const containerStyle = computed(() => (
    {
        width: props.width,
        height: props.height
    }
))

</script>
<template>
    <div class="avatar-container" :style="containerStyle" :class="props.variant">
        <img :src="props.url" alt="avatar" class="avatar-img">
    </div>
</template>

<style scoped lang="scss">
.avatar-container {
    background-color: var(--white);
    border-radius: 100%;
    cursor: pointer;
    overflow: hidden;
    
    & .avatar-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.outline {
    border: 5px solid var(--white);
    box-shadow: var(--shadow);
}
</style>