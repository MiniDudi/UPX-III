<template>
    <v-row no-gutters align="center">

        <v-col cols="8" align="center" justify="center">
            <div ref="imageWrapper" class="melao-icone-wrapper" @mousedown="startDrag" @mousemove="dragging" selectable="false"
                @mouseup="endDrag">
                <v-img class="melao-icone" width="200" alt="Vue logo" src="@/styles/novomelao.png" draggable="false" selectable="false" />
            </div>
        </v-col>
        <v-col cols="4" align="center">
            <div class=" mb-16">
                <span class="Titles mb-1">Bem vindo a</span>
                <br>
                <span class="cogniex"> Eco Community</span>
            </div>

            <div class="mb-4">
                <v-list-item>
                    <v-text-field clearable label="Email" prepend-icon="mdi-email" variant="underlined" />
                </v-list-item>
                <v-list-item>
                    <v-text-field clearable label="Password" prepend-icon="mdi-lock" variant="underlined" width="20" />
                </v-list-item>
            </div>

            <v-row no-gutters class="mb-9">
                <v-col align="center">
                    <v-btn elevation="0" rounded="0" color="#ffb300">Entrar</v-btn>
                </v-col>
            </v-row>

            <v-col cols="12">
                <div class="text-subtitle-1">Doesn't have an account?</div>
                <router-link to="/register" class="text-decoration-none">
                    <div class="text-subtitle-1">Register now!</div>
                </router-link>
            </v-col>

        </v-col>

    </v-row>
</template>
<script setup>
import { ref } from 'vue';

const imageWrapper = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const draggingImage = ref(false);
const startRotation = ref(0);

function startDrag(event) {
    draggingImage.value = true;
    mouseX.value = event.clientX;
    mouseY.value = event.clientY;
    const currentTransform = imageWrapper.value ? imageWrapper.value.style.transform : 'rotate(0deg)';
    startRotation.value = parseFloat(currentTransform.replace('rotate(', '').replace('deg)', '')) || 0;
}

function dragging(event) {
    if (draggingImage.value && imageWrapper.value) {
        const deltaX = event.clientX - mouseX.value;
        const deltaY = event.clientY - mouseY.value;
        const rotation = startRotation.value - deltaX;
        imageWrapper.value.style.transform = `rotate(${rotation}deg)`;
    }
}

function endDrag() {
    draggingImage.value = false;
}
</script>
<style>
.Titles {
    font-family: "Rubik", sans-serif;
    font-size: 38px;
    font-style: normal;
    text-align: center;
    font-weight: 600;
    line-height: initial;
    background: #455a64;
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
    background: #ffb300;
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