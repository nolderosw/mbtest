<template>
    <label>{{ label }}</label>
    <input v-model="localModel" :type="type" class="custom-input" />
</template>


<script setup>
defineProps({
    label: String,
    type: String,
})
const localModel = defineModel();
</script>

<style lang="scss" scoped>
@use "../../styles/variables.scss";

.custom-input {
    height: 28px;
    border-radius: 6px;
    border: 0.5px solid;
    outline: none;
}

.custom-input:focus {
    border-color: variables.$primary-color;
}
</style>