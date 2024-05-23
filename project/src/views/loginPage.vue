<template>
    <v-row no-gutters align="center">

        <v-col cols="8" align="center" justify="center">
            <div ref="imageWrapper" class="melao-icone-wrapper" @mousedown="startDrag" @mousemove="dragging"
                selectable="false" @mouseup="endDrag">
                <v-img class="melao-icone" width="200" alt="Vue logo" src="@/styles/novomelao.png" draggable="false"
                    selectable="false" />
            </div>
        </v-col>
        <v-col cols="4" align="center">
            <div class=" mb-16">
                <span class="Titles mb-1">Welcome to</span>
                <br>
                <span class="cogniex"> Eco Community</span>
            </div>

            <div class="mb-4">
                <v-list-item>
                    <v-text-field clearable v-model="email" label="Email" prepend-icon="mdi-email" style="color: #000000"
                        variant="underlined" />
                </v-list-item>
                <v-list-item>
                    <v-text-field clearable v-model="password" label="Password" prepend-icon="mdi-lock" style="color: #000000"
                        variant="underlined" />
                </v-list-item>
            </div>

            <v-row no-gutters class="mb-9">
                <v-col align="center">
                    <v-btn @click="login()" elevation="0" rounded="0" color="#FFC641" style="color: #000000">Login</v-btn>
                </v-col>
            </v-row>

            <v-col cols="12">
                <div class="text-subtitle-1" style="color: #000000">Doesn't have an account?</div>
                <router-link to="/register" class="text-decoration-none">
                    <div class="text-subtitle-1">Register now!</div>
                </router-link>
            </v-col>

        </v-col>

    </v-row>
</template>
<script>
import { ref } from 'vue';
import AuthController from '@/controller/authController';

const auth = new AuthController();

export default {
    name: 'LoginPage',
    components: {},
    setup() {
        const imageWrapper = ref(null);
        return { imageWrapper };
    },
    data() {
        return {
            email: '',
            password: '',
            imageWrapper: null,
            draggingImage: false,
            startRotation: 0,
            mouseX: 0,
            mouseY: 0,
        }
    },

    mounted() {

    },

    created() {

    },

    methods: {
        async login() {
            try {
                if (this.email != '' && this.password != '') {
                    const credentials = { email: this.email, password: this.password };
                    await auth.login(credentials);
                    this.$router.push({ path: '/home' })
                }
            } catch (error) {
                console.log(error);
            }
        },
        startDrag(event) {
            this.draggingImage = true;
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            const currentTransform = this.imageWrapper.value ? this.imageWrapper.value.style.transform : 'rotate(0deg)';
            this.startRotation = parseFloat(currentTransform.replace('rotate(', '').replace('deg)', '')) || 0;
        },
        dragging(event) {
            try {
                if (this.draggingImage && this.imageWrapper) {
                    const deltaX = event.clientX - this.mouseX;
                    const rotation = this.startRotation - deltaX;
                    this.imageWrapper.style.transform = `rotate(${rotation}deg)`;
                }
            } catch (error) {
                console.log(error);
            }
        },
        endDrag() {
            this.draggingImage = false;
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
</style>