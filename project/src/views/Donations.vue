<template>
    <v-row no-gutters align="center" justify="center" style="margin: 10px;">
        <v-col cols="12" align="center">
            <!-- Título Centralizado e Descendo -->
            <div class="page-title">Controle de Doações</div>

            <!-- Seção de Doações Disponíveis -->
            <div class="section-title">Doações Disponíveis</div>
            <v-row dense class="scroll-section" style="elevation: 1;">
                <v-col v-for="donation in donations" :key="donation.id" cols="12" @click="selectDonation(donation)">
                    <v-card :color="selectedDonation === donation ? '#FFC641' : '#ffffff'" outlined style="elevation: 1;">
                        <v-card-title>{{ donation.description }} - Qtd: {{ donation.quantity }} - Condição: {{ donation.condition }}</v-card-title>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Seção de Participantes Disponíveis -->
            <div class="section-title">Participantes Disponíveis</div>
            <v-row dense class="scroll-section" style="elevation: 1;">
                <v-col v-for="participant in participants" :key="participant.id" cols="12" @click="selectParticipant(participant)">
                    <v-card :color="selectedParticipant === participant ? '#FFC641' : '#ffffff'" outlined style="elevation: 1;">
                        <v-card-title>{{ participant.name }} - Email: {{ participant.email }} - Tel: {{ participant.phone }}</v-card-title>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Botão de Vínculo -->
            <v-btn @click="linkDonationToParticipant" color="#FFC641" class="mt-4">Vincular Participante à Doação</v-btn>
        </v-col>
    </v-row>
</template>

<script>
import { ref } from 'vue';
import { db } from '../firebase/index';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export default {
    name: 'DonationsPage',
    data() {
        return {
            donations: [],
            participants: [],
            selectedDonation: null,
            selectedParticipant: null,
        };
    },

    methods: {
        async loadDonationsAndParticipants() {
            try {
                // Carregar doações disponíveis
                const donationsSnapshot = await getDocs(collection(db, 'donations'));
                this.donations = donationsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

                // Carregar participantes disponíveis
                const participantsSnapshot = await getDocs(collection(db, 'participants'));
                this.participants = participantsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            } catch (error) {
                console.error("Erro ao carregar doações ou participantes: ", error);
            }
        },

        selectDonation(donation) {
            this.selectedDonation = donation;
        },

        selectParticipant(participant) {
            this.selectedParticipant = participant;
        },

        async linkDonationToParticipant() {
            try {
                if (this.selectedDonation && this.selectedParticipant) {
                    const donationRef = doc(db, 'donations', this.selectedDonation.id);
                    // Atualizar a doação com o ID do participante
                    await updateDoc(donationRef, { participantId: this.selectedParticipant.id });
                    console.log("Doação vinculada com sucesso!");
                }
            } catch (error) {
                console.error("Erro ao vincular doação a participante: ", error);
            }
        }
    },

    mounted() {
        this.loadDonationsAndParticipants();
    }
};
</script>

<style scoped>
/* Estilo para o título centralizado */
.page-title {
    font-family: "Rubik", sans-serif;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px; /* Desce um pouco o título */
}

/* Estilo para a seção */
.section-title {
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
}

/* Estilo para a seção com barra de rolagem */
.scroll-section {
    height: 300px;
    overflow-y: auto;
}

/* Padronizando os cards */
v-card {
    margin-bottom: 10px;
    padding: 10px;
}

/* Botão padronizado */
v-btn {
    margin-top: 20px;
    color: #FFC641;
}

</style>
