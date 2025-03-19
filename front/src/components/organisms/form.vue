<template>
    <div class="form-group">
        <Input label="Endereço de e-mail" type="email" />
        <RadioPersonGroup v-model="personType" />
        <Input label="Nome" type="name" />
        <Input label="Razão Social" type="name" />
        <Input label="CPF" type="cpf" />
        <Input label="CNPJ" type="cnpj" />
        <Input label="Data de nascimento" type="date" />
        <Input label="Data de Abertura" type="date" />
        <Input label="Telefone" type="phone" />
        <Input label="Sua senha" type="password" />
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Input from '../atoms/input.vue';
import RadioPersonGroup from '../molecules/radioPersonGroup.vue';

const personType = ref('physical');
</script>

<style lang="scss" scoped>
.form-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

</style>