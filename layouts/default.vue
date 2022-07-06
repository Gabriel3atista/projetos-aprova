<template>
    <Nuxt class="text-base text-gray" />
</template>
<script>

export default {
    name: "default",
}
</script>

<style lang="scss">
.darkBgColor {
    background-color: var(--dark-bg-color);
}

.mainBgColor {
    background-color: var(--main-color);
}

.secondBgColor {
    background-color: var(--second-color);
}

.mainTextColor {
    color: var(--main-color);
}

.secondTextColor {
    color: var(--second-color);
}

.button {
    background-color: var(--second-color);

    &:hover {
        background-color: var(--second-color-hover);
    }
}

.card {
    transition: .2s ease-in-out;
    border: 1px solid rgba(73, 73, 73, 1);

    &:hover {
        border: 1px solid var(--main-color)
    }
}
</style>