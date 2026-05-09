<template>
    <div class="text-3xl font-black text-shade-2xs" :class="props.colorClass">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
interface PageTitleProps {
    colorClass?: string;
}
const props = withDefaults(defineProps<PageTitleProps>(), {
    colorClass: "text-gray-100",
});
</script>