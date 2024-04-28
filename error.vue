<script setup>
const e = useError();
</script>

<template>
    <main>{{ e?.statusCode }} {{ e?.statusMessage }}</main>
</template>
