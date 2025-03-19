<template>
    <input v-model="localModel" type="radio" :name="name" :value="value" />
    <label class="input-label" for="radio">{{ radioLabel }}</label>
</template>

<script setup>
defineProps({
    radioLabel: String,
    name: String,
    value: String,
});

const localModel = defineModel();

</script>

<style lang="scss" scoped>
input {
    cursor: pointer;
}
.input-label {
    margin-right: 8px;
}
</style>