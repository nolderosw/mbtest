<template>
  <div class="app-container">
    <div class="page-container">
      <div class="title-container">
        <Title :current-step="currentStep" :personType="formData.personType" />
      </div>
      <div class="form-container">
        <Form :current-step="currentStep" :form-data="formData" />
      </div>
      <div class="actions-container">
        <BtnGroup
          :showBack="currentStep > 1"
          :showContinue="currentStep < 4"
          :showSubmit="currentStep === 4"
          @back="prevStep"
          @continue="nextStep"
          @submit="submitForm"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Title from './components/atoms/title.vue';
import BtnGroup from './components/molecules/btnGroup.vue';
import Form from './components/organisms/form.vue';

const currentStep = ref(1);

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

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++;
  }
};
const prevStep = () => {
  if (currentStep.value > 1){
     currentStep.value--;
  }
};

const submitForm = () => {

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
  min-width: 300px;
  padding-top: 24px;
}
.form-container {
  margin-top: 24px;
}
.actions-container {
  margin-top: 24px;
}
</style>
