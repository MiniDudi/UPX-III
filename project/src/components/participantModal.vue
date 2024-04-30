<template>
    <v-dialog max-width="500" max-height="500" v-model="isActive">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn class="mr-10 mt-15" v-bind="activatorProps" text="Adicionar Participante" elevation="0"
                color="#FFC641" @click="openModal('create')"></v-btn>
        </template>

        <template v-slot:default>
            <v-card title="Gerenciar Participante" class="mt-5">
                <v-card-text class="mt-5 mb-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="name" label="Nome" variant="underlined" clearable />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="email" label="Email" variant="underlined" clearable />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="phone" label="Telefone" variant="underlined" clearable />
                        </v-col>
                    </v-row>

                    <v-row align="end" justify="end" no-gutters>
                        <v-card-actions>
                            <v-btn text="Cancelar" @click="closeModal"></v-btn>
                            <v-spacer></v-spacer>

                            <v-btn text v-if="mode === 'create'" @click="createParticipant">Cadastrar</v-btn>
                            <v-btn text v-if="mode === 'edit'" @click="updateParticipant">Salvar</v-btn>
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
    name: 'ParticipantModal',
    props: {
        participantData: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            isActive: false,
            mode: 'create',
            name: '',
            email: '',
            phone: '',
        };
    },
    methods: {
        openModal(mode, participant = {}) {
            this.mode = mode;
            if (mode === 'edit') {
                this.name = participant.name;
                this.email = participant.email;
                this.phone = participant.phone;
            }
            this.isActive = true;
        },
        closeModal() {
            this.isActive = false;
            this.name = '';
            this.email = '';
            this.phone = '';
        },
        async createParticipant() {
            try {
                const participant = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone
                };
                await addDoc(collection(db, 'participants'), participant);
                this.closeModal();
            } catch (error) {
                console.error("Erro ao cadastrar participante: ", error);
            }
        },
        async updateParticipant() {
            try {
                const participantRef = doc(db, 'participants', this.participantData.id);
                await updateDoc(participantRef, {
                    name: this.name,
                    email: this.email,
                    phone: this.phone
                });
                this.closeModal();
            } catch (error) {
                console.error("Erro ao atualizar participante: ", error);
            }
        },
        async confirmDelete() {
            try {
                const participantRef = doc(db, 'participants', this.participantData.id);
                await deleteDoc(participantRef);
                this.closeModal();
            } catch (error) {
                console.error("Erro ao excluir participante: ", error);
            }
        }
    }
}
</script>

<style scoped>
/* Adicione seus estilos aqui se necessário */
</style>
