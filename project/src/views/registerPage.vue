<template>
    <v-row no-gutters align="center">
        <!-- Main image-->
        <v-col cols="8" align="center" justify="center">
            <div ref="imageWrapper" class="melao-icone-wrapper">
                <v-img class="melao-icone" width="200" alt="Vue logo" src="@/styles/novomelao.png" draggable="false"
                    selectable="false" />
            </div>
        </v-col>

        <!-- Text -->
        <v-col cols="4" align="center">
            <v-row no-gutters class="mb-16">
                <v-col cols="12">
                    <p class="Titles mt-1">Create your</p>
                </v-col>
                <v-col cols="12">
                    <p class="cogniex"> Account</p>
                </v-col>
            </v-row>

            <!-- Form -->
            <form @submit.prevent="submit" class="registration-form">
                <v-list-item>
                    <v-text-field clearable v-model="name" label="Name" style="color: #000000" variant="underlined"
                        prepend-icon="mdi-account" class="input-field" />
                </v-list-item>
                <v-list-item>
                    <v-text-field clearable v-model="phone" label="Phone Number" style="color: #000000"
                        prepend-icon="mdi-phone" variant="underlined" class="input-field" />
                </v-list-item>
                <v-list-item>
                    <v-text-field clearable v-model="email" label="Email" style="color: #000000" variant="underlined"
                        prepend-icon="mdi-email" class="input-field" />
                </v-list-item>
                <v-list-item>
                    <v-text-field clearable v-model="password" label="Password" style="color: #000000"
                        prepend-icon="mdi-lock" variant="underlined" class="input-field" type="password" />
                </v-list-item>

                <!-- Buttons -->
                <v-row no-gutters class="mb-9">
                    <v-col cols="6" align="center">
                        <v-btn @click="loginReturn()" elevation="0" rounded="0" color="#FFC641"
                            style="color: #000000;">Cancel</v-btn>
                    </v-col>
                    <v-col cols="6" align="center">
                        <v-btn @click="submit" elevation="0" rounded="0" color="#FFC641"
                            style="color: #000000; margin-left: 10px;">Submit</v-btn>
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
        },
        loginReturn() {
            this.$router.push({ path: '/' })
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
    margin: 20px;
    /* Adicionando margem para dar espaço ao redor da forma */
}
</style>
