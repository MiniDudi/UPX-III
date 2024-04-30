<template>
  <v-row no-gutters align="center" justify="center">
    <!-- Seção do título -->
    <v-col cols="12" class="title-section">
      <h2 class="title-text">
        <span class="text-inscricao">Registro</span> 
      </h2>
      <h2 class="subtitle-text">
        <span class="text-inscricao">de Usuário</span> 
      </h2>
    </v-col>

    <!-- Seção de preenchimento dos campos -->
    <v-col cols="6" class="form-section">
      <form @submit.prevent="submit" class="registration-form">
        <v-text-field
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Name"
          class="input-field"
        ></v-text-field>

        <v-text-field
          v-model="phone.value.value"
          :counter="10"
          :error-messages="phone.errorMessage.value"
          label="Phone Number"
          class="input-field"
        ></v-text-field>

        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
          class="input-field"
        ></v-text-field>

        <v-text-field
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
          label="Password"
          class="input-field"
          type="password"
        ></v-text-field>
      </form>
    </v-col>

    <!-- Seção dos botões -->
    <v-col cols="12" class="button-section" align="center" justify="center">
      <v-btn @click="submit" elevation="0" color="#FFC641" style="color: #000000;">Inscrever</v-btn>
      <v-btn @click="handleReset" elevation="0" color="#FFC641" style="color: #000000; margin-left: 10px;">Limpar Dados</v-btn>
    </v-col>
  </v-row>
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
      if (value?.length >= 10 && /[0-9]+/.test(value)) return true
      return 'Phone number needs to be at least 10 digits.'
    },
    email(value) {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return true
      return 'Must be a valid email address.'
    },
    password(value) {
      if (value?.length >= 8) return true
      return 'Password needs to be at least 8 characters long.'
    },
  },
})

const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const password = useField('password')

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<style scoped>
.title-section {
  text-align: center;
  margin-bottom: 20px;
}

.title-text {
  font-family: "Rubik", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  background: #000000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle-text {
  font-family: "Rubik", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  background: #FFC641;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-section {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  margin: 20px;
}

.input-field {
  margin-bottom: 15px; /* Espaçamento ajustado */
}

.button-section {
  margin-top: 20px;
}
</style>
