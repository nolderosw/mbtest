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
  const { personType, email, name, socialReason, cpf, cnpj, birthDate, openDate, phone, password } = formData.value;
  switch (currentStep.value) {
    case 1:
      return validateEmail(email);

    case 2:
      return personType === 'physical'
        ? validateName(name) && validateCpf(cpf) && validateDate(birthDate) && validatePhone(phone)
        : validateName(socialReason) && validateCnpj(cnpj) && validateDate(openDate) && validatePhone(phone);

    case 3:
      return validatePassword(password);

    case 4:
      const isValidPerson = personType === 'physical'
        ? validateName(name) && validateCpf(cpf) && validateDate(birthDate)
        : validateName(socialReason) && validateCnpj(cnpj) && validateDate(openDate);

      return validateEmail(email) && isValidPerson && validatePhone(phone) && validatePassword(password);

    default:
      return false;
  }
};

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

const clearAll = () => {
  formData.value = {
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
  }
  currentStep.value = 1;
}

const submitForm = async () => {
  if (currentStep.value === 4 && currentStepIsValid()) {
    try {
      const response = await fetch('http://localhost:3000/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData.value)
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar formulário: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Formulário enviado com sucesso:', data);
      clearAll();
      alert('Formulário enviado com sucesso')
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
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
