<template>
    <ul class="flex">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
</template>

<style scoped>
ul {
    @apply text-xl;
    a {
        @apply px-4 py-2;
    }
}
</style>
