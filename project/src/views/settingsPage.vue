<template>
    <v-container>
        <v-row justify="space-between" align="center" class="header">
            <v-col cols="6">
                <div class="title">Settings & Profile</div>
            </v-col>
            <v-col cols="6" class="logout-btn" align="end">
                <v-btn @click="logout" color="red" elevation="3" append-icon="mdi-logout">Logout</v-btn>
            </v-col>
        </v-row>

        <v-row class="content" justify="center" align="center">
            <!-- Card com campos de e-mail e senha à esquerda -->
            <v-col cols="6">
                <v-card elevation="3" class="info-card">
                    <v-card-title class="section-title">User Information</v-card-title>
                    <v-card-text>
                        <v-row align="center" justify="center">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="email"
                                    label="Email"
                                    clearable
                                    outlined
                                    prepend-icon="mdi-email"
                                />
                            </v-col>
                            <v-col cols="12" class="mt-3">
                                <v-text-field
                                    v-model="password"
                                    label="Password"
                                    type="password"
                                    clearable
                                    outlined
                                    prepend-icon="mdi-lock"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Card com avatar à direita -->
            <v-col cols="6" align="center">
                <v-card elevation="3" class="avatar-card">
                    <v-card-title class="section-title">Profile Picture</v-card-title>
                    <v-card-text align="center">
                        <v-avatar size="150" color="transparent" elevation="3">
                            <v-img
                                src="@/styles/novomelao.png"
                                alt="User Avatar"
                                aspect-ratio="1"
                                class="avatar-image"
                            />
                        </v-avatar>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'SettingsPage',
    setup() {
        // Dados do usuário logado - esses valores devem ser obtidos de uma API ou armazenamento local
        const email = ref('user@example.com');
        const password = ref('********');

        const logout = () => {
            // Adicionar lógica de logout aqui, como limpar a sessão e redirecionar para a página de login
            this.$router.push('/login');
        };

        return {
            email,
            password,
            logout,
        };
    },
};
</script>

<style scoped>
/* Estilo para o título centralizado */
.title {
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    margin: 0;
    padding-left: 15px;
}

/* Estilo para o botão de logout */
.logout-btn {
    text-align: right;
}

/* Estilo para os títulos de seção */
.section-title {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #FFC641;
}

/* Estilo para os cards */
.info-card, .avatar-card {
    width: 100%;
    margin: 20px 10px;
    padding: 10px;
}

/* Estilo para a imagem de avatar */
.avatar-image {
    border-radius: 50%;
}
</style>
