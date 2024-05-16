<template>
  <v-row no-gutters align="center">
      <!-- Seção de imagem e título -->
      <v-col cols="4" align="center" justify="center">
          <div ref="imageWrapper" class="melao-icone-wrapper">
              <v-img class="melao-icone" width="200" alt="Vue logo" src="@/styles/novomelao.png" draggable="false" selectable="false" />
          </div>
          
          <div class="mb-16">
              <br>
              <span class="Titles mb-1">Create your</span>
              <br>
              <span class="cogniex"> Account</span>
          </div>
      </v-col>

      <!-- Seção de preenchimento dos campos -->
      <v-col cols="8" align="center">
          <form @submit.prevent="submit" class="registration-form">
              <v-list-item>
                  <v-text-field
                      clearable
                      v-model="name"
                      label="Name"
                      style="color: #000000"
                      variant="underlined"
                      class="input-field"
                  />
              </v-list-item>
              <v-list-item>
                  <v-text-field
                      clearable
                      v-model="phone"
                      label="Phone Number"
                      style="color: #000000"
                      variant="underlined"
                      class="input-field"
                  />
              </v-list-item>
              <v-list-item>
                  <v-text-field
                      clearable
                      v-model="email"
                      label="Email"
                      style="color: #000000"
                      variant="underlined"
                      class="input-field"
                  />
              </v-list-item>
              <v-list-item>
                  <v-text-field
                      clearable
                      v-model="password"
                      label="Password"
                      style="color: #000000"
                      variant="underlined"
                      class="input-field"
                      type="password"
                  />
              </v-list-item>

              <!-- Seção dos botões -->
              <v-row no-gutters class="mb-9">
                  <v-col align="center">
                      <v-btn @click="submit" elevation="0" rounded="0" color="#FFC641" style="color: #000000; margin-right: 10px;">Submit</v-btn>
                      <v-btn @click="reset" elevation="0" rounded="0" color="#FFC641" style="color: #000000;">Reset</v-btn>
                  </v-col>
              </v-row>
          </form>
      </v-col>
  </v-row>
</template>

<script>
import { ref } from 'vue';
import AuthController from '@/controller/authController';

const auth = new AuthController();

export default {
  name: 'RegisterPage',
  components: {},
  setup() {
      const imageWrapper = ref(null);
      return { imageWrapper };
  },
  data() {
      return {
          name: '',
          phone: '',
          email: '',
          password: '',
          imageWrapper: null,
      }
  },

  methods: {
      async submit() {
          try {
              if (this.name && this.phone && this.email && this.password) {
                  const credentials = { name: this.name, phone: this.phone, email: this.email, password: this.password };
                  await auth.register(credentials);
                  this.$router.push({ path: '/home' });
              }
          } catch (error) {
              console.log(error);
          }
      },
      reset() {
          this.name = '';
          this.phone = '';
          this.email = '';
          this.password = '';
      }
      
  }
}
</script>

<style scoped>
.Titles {
  font-family: "Rubik", sans-serif;
  font-size: 38px;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  line-height: initial;
  background: #000000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cogniex {
  font-family: "Rubik", sans-serif;
  font-size: 38px;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  line-height: initial;
  background: #FFC641;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.melao-icone-wrapper {
  display: inline-block;
  /* Garante que o wrapper não seja maior que a imagem */
}

.melao-icone {
  animation: spin 30s linear infinite;
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.input-field {
  margin-bottom: 15px;
}

.registration-form {
  margin: 20px; /* Adicionando margem para dar espaço ao redor da forma */
}
</style>
