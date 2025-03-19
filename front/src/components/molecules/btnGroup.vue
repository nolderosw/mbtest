<template>
    <div class="btn-container">
        <Btn label="Voltar" :disabled="false" type-class="outlined" />
        <Btn label="Continuar" :disabled="false" type-class="primary" />
        <Btn label="Cadastrar" :disabled="false" type-class="primary" />
    </div>
</template>

<script setup>
import Btn from '../atoms/btn.vue';

</script>

<style lang="scss" scoped>

.btn-container {
    display: flex;
    width: 100%;
    gap: 8px;
}


</style>