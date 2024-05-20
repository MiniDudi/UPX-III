<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Settings & Profile</p>
            </v-col>
            <v-col class="logout-btn" align="end" justify="end">
                <v-btn @click="logout" class="mr-10 mt-15" color="red" elevation="3"
                    append-icon="mdi-logout">Logout</v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="mt-15">
            <v-col cols="7">
                <v-card elevation="3" class="info-card ml-10 mr-10" id="card1" align="center" justify="center" ref="card1">
                    <v-card-title class="section-title">User Information</v-card-title>
                    <v-card-text align="center" justify="center">
                        <v-row no-gutters>
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
                            <v-btn class="mb-1 mt-1" elevation="3" color="green">Salvar</v-btn>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="5" align="center">
                <v-card elevation="3" class="avatar-card" align="center" justify="center" :style="{ height: `${card1Height}px` }">
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
    </v-col>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
    name: 'SettingsPage',
    setup() {
        const email = ref('user@example.com');
        const password = ref('********');
        const card1Height = ref(0);

        const logout = () => {
            this.$router.push('/login');
        };

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
            card1Height,
            updateCardHeight
        };
    },

    data() {
        return {

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

.avatar-card {
    transition: height 0.3s ease;
}
</style>
