<template>
    <div class="step-title">
        Etapa <span class="current-step">{{ currentStep }}</span> de 4
    </div>
    <div class="form-title">
        {{ getTitleByCurrentStep() }}
    </div>
</template>


<script setup>
const props = defineProps({
    currentStep: Number,
    personType: String,
})

const titles = [
  'Seja bem-vindo(a)',
  '',
  'Criação de Senha',
  'Revisão dos Dados'
];

const getTitleByCurrentStep = () => {
    if(props.currentStep === 2) {
        if(props.personType === 'physical') {
            return 'Pessoa Física'
        } return 'Pessoa Jurídica'
    } else {
        return titles[props.currentStep - 1];
    }
}
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