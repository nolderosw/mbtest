<template>
    <div class="step-title">
        Etapa <span class="current-step">{{ currentStep }}</span> de 4
    </div>
    <div class="form-title">
        {{ title }}
    </div>
</template>


<script setup>
defineProps({
    currentStep: Number,
    title: String,
})
</script>

<style lang="scss" scoped>
@use "../../styles/variables.scss";

.step-title {
    font-size: 16px;
}
.current-step {
    color: variables.$primary-color;
}
.form-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 4px;
}
</style>