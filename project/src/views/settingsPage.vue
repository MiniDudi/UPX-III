<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Settings & Profile</p>
            </v-col>
            <v-col class="logout-btn" align="end" justify="end">
                <v-btn @click="logout" class="mr-10 mt-15" color="red" elevation="3" rounded="0"
                    append-icon="mdi-logout">Logout</v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters class="mt-15">
            <v-col cols="7">
                <v-card elevation="3" class="info-card ml-10 mr-10" id="card1" ref="card1" height="300">
                    <v-card-title class="section-title" align="center">User Information</v-card-title>
                    <v-col cols="12" align="center" justify="center">
                        <v-row no-gutters class="mr-10 ml-10">
                            <v-col cols="12">
                                <v-text-field v-model="email" label="Email" clearable outlined
                                    prepend-icon="mdi-email" />
                            </v-col>
                            <v-col cols="12" class="mt-3">
                                <v-text-field v-model="password" label="Password" type="password" clearable outlined
                                    prepend-icon="mdi-lock" />
                            </v-col>
                        </v-row>
                        <v-row no-gutters align="center" justify="center">
                            <v-btn elevation="3" rounded="0" color="green">Salvar</v-btn>
                        </v-row>
                    </v-col>
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
    </v-col>
</template>

<script>
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
            email: '',
            senha: '',
        }
    },

    methods: {
        logout() {
            this.$router.push('/')
        }
    }
};
</script>

<style scoped>
.title {
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    margin: 0;
    padding-left: 15px;
}

.section-title {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #FFC641;
}
</style>
