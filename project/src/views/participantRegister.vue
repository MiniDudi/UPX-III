<template>
    <v-row no-gutters align="center" justify="center">
        <v-col cols="8" align="center">
            <!-- Título Centralizado -->
            <div class="page-title">Cadastro de Participantes</div>

            <!-- Formulário de Cadastro -->
            <v-form @submit.prevent="registerParticipant">
                <!-- Campos de Dados -->
                <v-list dense>
                    <v-list-item>
                        <v-text-field v-model="name" label="Nome" prepend-icon="mdi-account" variant="underlined" />
                    </v-list-item>
                    <v-list-item>
                        <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" variant="underlined" />
                    </v-list-item>
                    <v-list-item>
                        <v-text-field v-model="phone" label="Telefone" prepend-icon="mdi-phone" variant="underlined" />
                    </v-list-item>

                    <!-- Checkbox para identificar se é Doador ou Receptor -->
                    <v-list-item>
                        <v-checkbox v-model="isDonor" label="Doador" />
                        <v-checkbox v-model="isReceptor" label="Receptor" />
                    </v-list-item>
                </v-list>

                <!-- Botão de Cadastro -->
                <v-btn type="submit" color="#FFC641" class="mt-3">Cadastrar Participante</v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
import { ref } from 'vue';
import { db } from '../firebase/index';
import { collection, addDoc } from "firebase/firestore";

export default {
    name: 'ParticipantRegister',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            isDonor: false
        };
    },

    methods: {
        async registerParticipant() {
            try {
                const participant = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    isDonor: this.isDonor
                };
                await addDoc(collection(db, 'participants'), participant);
                // Adicione lógica para lidar com sucesso ou erro.
            } catch (error) {
                console.error("Erro ao cadastrar participante: ", error);
            }
        }
    }
}
</script>

<style scoped>
.page-title {
    font-family: "Rubik", sans-serif;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
}
</style>
