<template>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>
  
      <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
      ></v-text-field>
  
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>
  
      <v-select
        v-model="select.value.value"
        :error-messages="select.errorMessage.value"
        :items="items"
        label="Select"
      ></v-select>
  
      <v-btn class="me-4" type="submit"> Inscrever </v-btn>
  
      <v-btn @click="handleReset"> Limpar Dados </v-btn>  
    </form>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { useField, useForm } from 'vee-validate'
  
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true
  
          return 'Name needs to be at least 2 characters.'
        },
        phone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true
  
          return 'Phone number needs to be at least 9 digits.'
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
  
          return 'Must be a valid e-mail.'
        },
        select(value) {
          if (value) return true
  
          return 'Select an item.'
        },
        checkbox(value) {
          if (value === '1') return true
  
          return 'Must be checked.'
        },
      },
    })
    const name = useField('name')
    const phone = useField('phone')
    const email = useField('email')
    const select = useField('select')
    const checkbox = useField('checkbox')
  
    const items = ref(['Funcionário', 'Gerente'])
  
    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })
  </script>
  
  