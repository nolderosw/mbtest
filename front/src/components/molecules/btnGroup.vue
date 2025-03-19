<template>
    <div class="btn-container">
        <Btn v-if="showBack" @click="emit('back')" label="Voltar" :disabled="false" type-class="outlined" />
        <Btn v-if="showContinue" @click="emit('continue')" label="Continuar" :disabled="false" type-class="primary" />
        <Btn v-if="showSubmit" @click="emit('submit')" label="Cadastrar" :disabled="false" type-class="primary" />
    </div>
</template>

<script setup>
import Btn from '../atoms/btn.vue';
const emit = defineEmits(['back', 'continue', 'submit']);

defineProps({
    showBack: Boolean,
    showContinue: Boolean,
    showSubmit: Boolean
})
</script>

<style lang="scss" scoped>

.btn-container {
    display: flex;
    width: 100%;
    gap: 8px;
}


</style>