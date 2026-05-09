<template>
    <h1>Profile {{profileid}}</h1>
</template>
<script lang="js" setup>
const profileid = useRoute().params.profileId;
definePageMeta({
    layout: "profiles"
})
</script>