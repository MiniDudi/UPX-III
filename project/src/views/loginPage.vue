<template>
    <v-row no-gutters align="center">

        <v-col cols="8">
            <v-img width="600" alt="Vue logo" src="@/styles/melão.svg" draggable="false" />
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
</style>