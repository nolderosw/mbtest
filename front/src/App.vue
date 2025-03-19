<template>
  <div class="app-container">
    <div class="page-container">
      <div class="title-container">
        <Title :current-step="currentStep" :personType="formData.personType" />
        <div class="error" v-if="showError">
          Verifique os dados preenchidos para continuar
        </div>
      </div>
      <div class="form-container">
        <Form :current-step="currentStep" :form-data="formData" :form-error="showError" />
      </div>
      <div class="actions-container">
        <BtnGroup :showBack="currentStep > 1" :showContinue="currentStep < 4" :showSubmit="currentStep === 4"
          @back="prevStep" @continue="nextStep" @submit="submitForm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from './components/atoms/title.vue';
import BtnGroup from './components/molecules/btnGroup.vue';
import Form from './components/organisms/form.vue';
import { validateEmail, validateName, validateCpf, validateCnpj, validateDate, validatePhone, validatePassword } from './shared/validators';

const currentStep = ref(1);
const showError = ref(false);

const formData = ref({
  email: '',
  personType: 'physical',
  name: '',
  socialReason: '',
  cpf: '',
  cnpj: '',
  birthDate: '',
  openDate: '',
  phone: '',
  password: '',
});

const currentStepIsValid = () => {
  if (currentStep.value === 1) {
    return validateEmail(formData.value.email)
  }
  if (currentStep.value === 2) {
    if (formData.value.personType === 'physical') {
      return validateName(formData.value.name) && validateCpf(formData.value.cpf) && validateDate(formData.value.birthDate) && validatePhone(formData.value.phone)
    } else {
      return validateName(formData.value.socialReason) && validateCnpj(formData.value.cnpj) && validateDate(formData.value.openDate) && validatePhone(formData.value.phone)
    }
  }
  if (currentStep.value === 3) {
    return validatePassword(formData.value.password)
  }
  if (currentStep.value === 4) {
    if (formData.value.personType === 'physical') {
      return validateEmail(formData.value.email) && validateName(formData.value.name) && validateCpf(formData.value.cpf) && validateDate(formData.value.birthDate) && validatePhone(formData.value.phone) && validatePassword(formData.value.password)
    } else {
      return validateEmail(formData.value.email) && validateName(formData.value.socialReason) && validateCnpj(formData.value.cnpj) && validateDate(formData.value.openDate) && validatePhone(formData.value.phone) && validatePassword(formData.value.password)
    }
  }
  return false
}

const nextStep = () => {
  if (currentStep.value < 4 && currentStepIsValid()) {
    showError.value = false;
    currentStep.value++;
  } else {
    showError.value = true;
  }
};
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    showError.value = false;
  }
};

const submitForm = () => {
  if(currentStep.value === 4 && currentStepIsValid()) {
    console.log(formData)
    //post
  } else {
    showError.value = true;
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.page-container {
  max-width: 500px;
  min-width: 350px;
  padding-top: 24px;
}

.form-container {
  margin-top: 24px;
}

.actions-container {
  margin-top: 24px;
}

.error {
  margin-top: 8px;
  color: red;
}
</style>
