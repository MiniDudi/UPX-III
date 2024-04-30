<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Cadastro de Participantes</p>
            </v-col>
            <v-col cols="3" justify="end" align="end">
                <!-- Botões -->
                <ParticipantModal ref="participantModal" />
                <ParticipantModal ref="participantModal" />
                <ParticipantModal ref="participantModal" />
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="mt-15">
            <v-col cols="12" align="center" justify="center">
                <v-card class="ml-10 mr-10" height="460" elevation="3">
                    <v-data-table-virtual class="table" :headers="participantHeaders">
                    </v-data-table-virtual>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import ParticipantModal from '@/components/participantModal.vue';
import { db } from '../firebase/index';

export default {
    name: 'ParticipantRegister',
    components: {
        ParticipantModal,
    },
    data() {
        return {
            participants: [],
            selectedParticipant: null,
            participantHeaders: [
                { title: 'Nome', key: 'name' },
                { title: 'Email', key: 'email' },
                { title: 'Telefone', key: 'phone' },
                { title: 'Ações', key: 'actions' }
            ]
        };
    },
    methods: {
        async fetchParticipants() {
            try {
                const querySnapshot = await getDocs(collection(db, 'participants'));
                this.participants = [];
                querySnapshot.forEach((doc) => {
                    this.participants.push({ id: doc.id, ...doc.data() });
                });
            } catch (error) {
                console.error("Erro ao buscar participantes: ", error);
            }
        },
        selectParticipant(participant) {
            this.selectedParticipant = participant;
        },
        openModal(mode, participant = null) {
            const modal = this.$refs.participantModal;
            modal.openModal(mode, participant);
        },
    },
    async mounted() {
        await this.fetchParticipants();
    },
}
</script>

<style scoped>
/* Adicione seus estilos aqui se necessário */
</style>
