<template>
    <div class="form-group">
        <template v-if="currentStep === 1">
            <Input v-model="formData.email" label="Endereço de e-mail" type="email" :error="formError" />
            <RadioPersonGroup v-model="formData.personType" />
        </template>
        <template v-if="currentStep === 2">
            <template v-for="field in filteredFields" :key="field.model">
                <Input v-if="field.model !== 'password'" v-model="formData[field.model]" :label="field.label" :type="field.type" :error="formError" :placeholder="field.placeholder" />
            </template>
        </template>
        <template v-if="currentStep === 3">
            <Input v-model="formData.password" label="Sua senha" type="password" :error="formError" />
        </template>
        <template v-if="currentStep === 4">
            <template v-for="field in filteredFields" :key="field.model">
                <Input v-model="formData[field.model]" :label="field.label" :type="field.type" :error="formError" :placeholder="field.placeholder" />
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
    formError: Boolean,
    formData: Object,
});

const fields = [
    { model: 'name', label: 'Nome', type: 'text', showFor: ['physical'] },
    { model: 'socialReason', label: 'Razão Social', type: 'text', showFor: ['juridical'] },
    { model: 'cpf', label: 'CPF', type: 'cpf', placeholder:'xxx.xxx.xxx-xx', showFor: ['physical'] },
    { model: 'cnpj', label: 'CNPJ', type: 'cnpj', placeholder:'xx.xxx.xxx/xxxx-xx', showFor: ['juridical'] },
    { model: 'birthDate', label: 'Data de nascimento', type: 'date', showFor: ['physical'] },
    { model: 'openDate', label: 'Data de Abertura', type: 'date', showFor: ['juridical'] },
    { model: 'phone', label: 'Telefone', type: 'phone', placeholder:'(xx)xxxxx-xxxx', showFor: ['juridical', 'physical'] },
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