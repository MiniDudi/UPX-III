<template>
    <v-row no-gutters align="center" justify="center">
        <v-col cols="8" align="center">
            <!-- Título Centralizado -->
            <div class="page-title">Cadastro de Doação</div>

            <!-- Formulário de Cadastro -->
            <v-form @submit.prevent="registerDonation">
                <!-- Campos de Dados -->
                <v-list dense>
                    <v-list-item>
                        <v-text-field v-model="description" label="Descrição" prepend-icon="mdi-package-variant" variant="underlined" />
                    </v-list-item>
                    <v-list-item>
                        <v-text-field v-model="quantity" label="Quantidade" prepend-icon="mdi-counter" variant="underlined" />
                    </v-list-item>
                    <v-list-item>
                        <v-text-field v-model="condition" label="Condição" prepend-icon="mdi-tag" variant="underlined" />
                    </v-list-item>
                </v-list>

                <!-- Botão de Cadastro -->
                <v-btn type="submit" color="#FFC641" class="mt-3">Cadastrar Doação</v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
import { ref } from 'vue';
import { db } from '../firebase/index';
import { collection, addDoc } from 'firebase/firestore';

export default {
    name: 'DonationRegister',
    data() {
        return {
            description: '',
            quantity: '',
            condition: ''
        };
    },

    methods: {
        async registerDonation() {
            try {
                const donation = {
                    description: this.description,
                    quantity: this.quantity,
                    condition: this.condition
                };
                await addDoc(collection(db, 'donations'), donation);
                // Implementar lógica para lidar com sucesso ou erro.
            } catch (error) {
                console.error("Erro ao cadastrar doação: ", error);
            }
        }
    }
};
</script>

<style scoped>
.page-title {
    font-family: 'Rubik', sans-serif;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
}
</style>
