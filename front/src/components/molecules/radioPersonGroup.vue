<template>
    <div class="radio-group">
        <Radio v-model="selectedOption" radio-label="Pessoa Física" name="person-type" value="physical" />
        <Radio v-model="selectedOption" radio-label="Pessoa Jurídica" name="person-type" value="juridical" />
    </div>
</template>

<script setup>
import Radio from '../atoms/radio.vue';

const selectedOption = defineModel();
</script>

<style lang="scss" scoped>
    .radio-group {
        display: inline-block;
    }
</style>