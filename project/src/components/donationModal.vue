<template>
    <v-dialog max-width="500" max-height="500" v-model="isActive">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn class="mr-10 mt-15" v-bind="activatorProps" text="Adicionar Doação" elevation="0"
                color="#FFC641" @click="openModal('create')"></v-btn>
        </template>

        <template v-slot:default>
            <v-card title="Gerenciar Doação" class="mt-5">
                <v-card-text class="mt-5 mb-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="description" label="Descrição" variant="underlined" clearable />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="quantity" label="Quantidade" variant="underlined" clearable />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="condition" label="Condição" variant="underlined" clearable />
                        </v-col>
                    </v-row>

                    <v-row align="end" justify="end" no-gutters>
                        <v-card-actions>
                            <v-btn text="Cancelar" @click="closeModal"></v-btn>
                            <v-spacer></v-spacer>

                            <v-btn text v-if="mode === 'create'" @click="createDonation">Cadastrar</v-btn>
                            <v-btn text v-if="mode === 'edit'" @click="updateDonation">Salvar</v-btn>
                            <v-btn text v-if="mode === 'delete'" @click="confirmDelete">Excluir</v-btn>
                        </v-card-actions>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import { db } from '../firebase/index';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default {
    name: 'DonationModal',
    props: {
        donationData: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            isActive: false,
            mode: 'create',
            description: '',
            quantity: '',
            condition: '',
        };
    },
    methods: {
        openModal(mode, donation = {}) {
            this.mode = mode;
            if (mode === 'edit') {
                this.description = donation.description;
                this.quantity = donation.quantity;
                this.condition = donation.condition;
            }
            this.isActive = true;
        },
        closeModal() {
            this.isActive = false;
            this.description = '';
            this.quantity = '';
            this.condition = '';
        },
        async createDonation() {
            try {
                const donation = {
                    description: this.description,
                    quantity: this.quantity,
                    condition: this.condition
                };
                await addDoc(collection(db, 'donations'), donation);
                this.closeModal();
            } catch (error) {
                console.error("Erro ao cadastrar doação: ", error);
            }
        },
        async updateDonation() {
            try {
                const donationRef = doc(db, 'donations', this.donationData.id);
                await updateDoc(donationRef, {
                    description: this.description,
                    quantity: this.quantity,
                    condition: this.condition
                });
                this.closeModal();
            } catch (error) {
                console.error("Erro ao atualizar doação: ", error);
            }
        },
        async confirmDelete() {
            try {
                const donationRef = doc(db, 'donations', this.donationData.id);
                await deleteDoc(donationRef);
                this.closeModal();
            } catch (error) {
                console.error("Erro ao excluir doação: ", error);
            }
        }
    }
}
</script>
