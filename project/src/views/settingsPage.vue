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

            <v-col cols="5" align="center" justify="center">
                <v-card elevation="3" class="avatar-card" align="center" justify="center" height="300">
                    <v-card-title class="section-title">Profile Picture</v-card-title>
                    <v-col cols="12">
                        <v-row no-gutters align="center" justify="center">
                            <v-avatar size="150" color="transparent" elevation="3">
                                <v-img src="@/styles/novomelao.png" alt="User Avatar" aspect-ratio="1"
                                    class="avatar-image" />
                            </v-avatar>
                        </v-row>
                    </v-col>
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
        const email = ref('user@example.com');
        const password = ref('********');
        const card1Height = ref(0);

        onMounted(() => {
            // Update card1Height on mount
            updateCardHeight();
        });

        const updateCardHeight = () => {
            const card1 = document.getElementById('card1');
            if (card1) {
                card1Height.value = card1.offsetHeight;
            }
        };

        // Watch for changes in email and password to update height if necessary
        watch([email, password], () => {
            updateCardHeight();
        });

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
