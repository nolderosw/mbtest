<template>
    <button @click="emit('click')" :disabled="disabled" type="button" :class="['btn', typeClass]">{{ label }}</button>
</template>

<script setup>

defineProps({
    label: String,
    typeClass: String,
    disabled: Boolean,
})

const emit = defineEmits(['click'])

</script>

<style lang="scss" scoped>
@use "../../styles/variables.scss";

.btn {
    border-color: variables.$primary-color;
    border: 0.5px solid;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
}

.primary {
    background-color: variables.$primary-color;
    color: white;
}

.outlined {
    background-color: white;
    color: variables.$primary-color;
}

</style>