<template>
    <button class="button uppercase text-white font-semibold rounded" type="button">
        <slot />
    </button>
</template>
<script>
export default {
    name: 'ButtonComponent'
}
</script>

<style lang="scss" scoped>
.button {
    background-color: var(--main-color);

    &:hover {
        background-color: var(--main-color-hover);
    }
}
</style>