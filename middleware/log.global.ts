export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`Navigate from ${from.fullPath} to ${to.fullPath}`);
});

