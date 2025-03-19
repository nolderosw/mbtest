<template>
    <label>{{ label }}</label>
    <input v-model="localModel" :type="type" :placeholder="placeholder" class="custom-input" />
</template>


<script setup>
const props = defineProps({
    label: String,
    type: String,
    error: Boolean,
    placeholder: String,
})
const localModel = defineModel();

const getErrorByType = () => {
    if(props.type === 'email') {
        return 'Formato inválido'
    }
}
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
.error {
    color: red;
    font-size: 12px;
}
</style>