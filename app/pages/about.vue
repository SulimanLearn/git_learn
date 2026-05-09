<template>
    <PageTitle color-class="text-red-500">about</PageTitle>
    {{ counter}}
</template>
<script lang="js" setup>
    const counter = useState('Count', () => 0);
</script>