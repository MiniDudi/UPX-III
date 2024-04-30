<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="12" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Link Page</p>
            </v-col>

            <v-col cols="5">
                <v-row no-gutters align="center" justify="center" class="mt-15">
                    <v-col cols="12" align="center" justify="center">
                        <v-card class="ml-10 mr-10" height="460" elevation="3">
                            <v-row no-gutters align="center" justify="start">
                                <v-col cols="6">
                                    <p class="text-h5">Donations</p>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="searchTerm1" label="Search" class="mx-4 mt-4 shrink"
                                        variant="solo-filled" prepend-inner-icon="mdi-magnify" />
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-data-table-virtual class="table" :headers="donationHeader" item-value="name"
                                    fixed-header :items="filteredDonations1">
                                </v-data-table-virtual>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="center" justify="center">
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-btn color="#FFC641"><v-icon>mdi-relation-one-to-one</v-icon></v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="5">
                <v-row no-gutters align="center" justify="center" class="mt-15">
                    <v-col cols="12" align="center" justify="center">
                        <v-card class="ml-10 mr-10" height="460" elevation="3">
                            <v-row no-gutters align="center" justify="start">
                                <v-col cols="6">
                                    <p class="text-h5">Paticipants</p>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="searchTerm2" label="Search" class="mx-4 mt-4 shrink"
                                        variant="solo-filled" prepend-inner-icon="mdi-magnify" />
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-data-table-virtual class="table" :headers="donationHeader" item-value="name"
                                    fixed-header :items="filteredDonations2">
                                </v-data-table-virtual>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import { ref, computed } from 'vue';
import { db } from '../firebase/index';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export default {
    name: 'DonationsPage',
    data() {
        return {
            donationHeader: [
                { title: "id", aling: "start", key: "id" },
                { title: "Title", aling: "center", key: "title" },
                { title: "Qty.", aling: "center", key: "quantity" },
                { title: "Conditions", aling: "end", key: "conditions" }
            ],
            donationsData: [
                { id: 1, title: 'Clothes Donation', quantity: 10, conditions: 'New' },
                { id: 2, title: 'Food Donation', quantity: 20, conditions: 'Non-perishable' },
                { id: 3, title: 'Book Donation', quantity: 15, conditions: 'Good Condition' },
                { id: 4, title: 'Toy Donation', quantity: 8, conditions: 'Unused' },
                { id: 5, title: 'Electronics Donation', quantity: 5, conditions: 'Working' }
            ],
            donations: [],
            participants: [],
            selectedDonation: null,
            selectedParticipant: null,
            searchTerm1: '',
            searchTerm2: '',
            search: '',
        };
    },

    computed: {
        filteredDonations1() {
            return this.donationsData.filter(donation =>
                donation.title.toLowerCase().includes(this.searchTerm1.toLowerCase())
            );
        },

        filteredDonations2() {
            return this.donationsData.filter(donation =>
                donation.title.toLowerCase().includes(this.searchTerm2.toLowerCase())
            );
        }
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
    margin-bottom: 30px;
    /* Desce um pouco o título */
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
