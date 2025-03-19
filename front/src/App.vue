<template>
  <div class="app-container">
    <div class="page-container">
      <div class="title-container">
        <Title :current-step="1" title="Seja bem Vindo(a)" />
      </div>
      <div class="form-container">
        <Form />
      </div>
      <div class="actions-container">
        <BtnGroup />
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from './components/atoms/title.vue';
import BtnGroup from './components/molecules/btnGroup.vue';
import Form from './components/organisms/form.vue';
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
  padding-top: 24px;
}
.form-container {
  margin-top: 24px;
}
.actions-container {
  margin-top: 24px;
}
</style>
