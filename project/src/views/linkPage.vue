<template>
    <v-col cols="12">
      <v-row no-gutters>
        <v-col cols="12">
          <p class="ml-10 mt-10 text-h2">Link Page</p>
        </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mt-15">
        <v-col cols="12">
          <v-card elevation="3" class="ml-10 mr-10">
            <v-row no-gutters align="center" justify="center">
              <v-col cols="5">
                <v-col cols="12" align="center" justify="center">
                  <v-row no-gutters align="center" justify="start">
                    <v-col cols="6">
                      <p class="text-h5">Donations</p>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="searchTerm1"
                        label="Search"
                        class="mx-4 mt-4 shrink"
                        variant="solo-filled"
                        prepend-inner-icon="mdi-magnify"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-data-table-virtual
                      class="table"
                      :headers="donationHeader"
                      item-value="title"
                      fixed-header
                      :items="filteredDonations1"
                      @click:row="syncDonation"
                    >
                    </v-data-table-virtual>
                  </v-row>
                </v-col>
              </v-col>
              <v-col cols="2" align="center" justify="center" class="">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-btn @click="linkDonationToParticipant" color="#FFC641">
                      <v-icon>mdi-relation-one-to-one</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="5">
                <v-col cols="12" align="center" justify="center">
                  <v-row no-gutters align="center" justify="start">
                    <v-col cols="6">
                      <p class="text-h5">Participants Recptores</p>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="searchTerm2"
                        label="Search"
                        class="mx-4 mt-4 shrink"
                        variant="solo-filled"
                        prepend-inner-icon="mdi-magnify"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-data-table-virtual
                      class="table"
                      :headers="participantHeader"
                      item-value="nome"
                      fixed-header
                      :items="filteredParticipants"
                      @click:row="syncParticipant"
                    >
                    </v-data-table-virtual>
                  </v-row>
                </v-col>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import { db } from '../firebase/index';
  import { collection, getDocs, updateDoc, doc, query, where} from 'firebase/firestore';
  
  export default {
    name: 'DonationsPage',
    data() {
      return {
        donationHeader: [
          { title: 'Doador', align: 'start', key: 'doador' },
          { title: 'Descrição', align: 'center', key: 'description' },
          { title: 'Qty.', align: 'center', key: 'quantity' },
        ],
        participantHeader: [
          { title: 'Nome', align: 'center', key: 'nome' },
          { title: 'Email', align: 'center', key: 'email' },
          { title: 'Telefone', align: 'center', key: 'telefone' },
     
        ],
        donations: [],
        participants: [],
        selectedDonation: null,
        selectedParticipant: null,
        searchTerm1: '',
        searchTerm2: '',
      };
    },
  
    mounted() {
      this.loadDonationsAndParticipants();
    },
  
    computed: {
      filteredDonations1() {
        return this.donations.filter((donation) =>
          donation.description.toLowerCase().includes(this.searchTerm1.toLowerCase())
        );
      },
      filteredParticipants() {
        return this.participants.filter((participant) =>
          participant.nome.toLowerCase().includes(this.searchTerm2.toLowerCase())
        );
      },
    },
  
    methods: {
      async loadDonationsAndParticipants() {
        try {
          // Carregar doações disponíveis
          const donationsSnapshot = await getDocs(collection(db, 'donations'));
          this.donations = donationsSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          const participantsQuery = query(collection(db, 'participants'), where('status', '==', 'Receptor'));
                const participantsSnapshot = await getDocs(participantsQuery);

                // Mapeie os documentos filtrados para o array de participantes
                this.participants = participantsSnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
        } catch (error) {
          console.error('Erro ao carregar doações ou participantes: ', error);
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
            console.log('Doação vinculada com sucesso!');
          }
        } catch (error) {
          console.error('Erro ao vincular doação a participante: ', error);
        }
      },
  
      syncDonation(event) {
        this.selectedDonation = event.item;
      },
  
      syncParticipant(event) {
        this.selectedParticipant = event.item;
      },
    },
  };
  </script>
  
  <style scoped>
  .page-title {
    font-family: 'Rubik', sans-serif;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .section-title {
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .scroll-section {
    height: 300px;
    overflow-y: auto;
  }
  
  .table {
    padding: 5px 20px;
  }
  
  v-card {
    margin-bottom: 10px;
    padding: 10px;
  }
  
  v-btn {
    margin-top: 20px;
    color: #ffc641;
  }
  </style>
  