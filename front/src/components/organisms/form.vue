<template>
    <div class="form-group">
        <template v-if="currentStep === 1">
            <Input v-model="formData.email" label="Endereço de e-mail" type="email" />
            <RadioPersonGroup v-model="formData.personType" />
        </template>
        <template v-if="currentStep === 2">
            <template v-for="field in filteredFields" :key="field.model">
                <Input v-if="field.model !== 'password'" v-model="formData[field.model]" :label="field.label" :type="field.type" />
            </template>
        </template>
        <template v-if="currentStep === 3">
            <Input v-model="formData.password" label="Sua senha" type="password" />
        </template>
        <template v-if="currentStep === 4">
            <template v-for="field in filteredFields" :key="field.model">
                <Input v-model="formData[field.model]" :label="field.label" :type="field.type" />
            </template>
        </template>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Input from '../atoms/input.vue';
import RadioPersonGroup from '../molecules/radioPersonGroup.vue';

const props = defineProps({
    currentStep: Number,
    formData: Object,
});

const fields = [
    { model: 'name', label: 'Nome', type: 'text', showFor: ['physical'] },
    { model: 'socialReason', label: 'Razão Social', type: 'text', showFor: ['juridical'] },
    { model: 'cpf', label: 'CPF', type: 'cpf', showFor: ['physical'] },
    { model: 'cnpj', label: 'CNPJ', type: 'cnpj', showFor: ['juridical'] },
    { model: 'birthDate', label: 'Data de nascimento', type: 'date', showFor: ['physical'] },
    { model: 'openDate', label: 'Data de Abertura', type: 'date', showFor: ['juridical'] },
    { model: 'phone', label: 'Telefone', type: 'phone', showFor: ['juridical', 'physical'] },
    { model: 'password', label: 'Sua senha', type: 'password', showFor: ['juridical', 'physical'] },
];

const filteredFields = computed(() => {
    return fields.filter(field => field.showFor.includes(props.formData.personType));
});
</script>

<style lang="scss" scoped>
.form-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>