<template>
    <v-col cols="12">
      <v-row no-gutters>
        <v-col cols="6" justify="start" align="start">
          <p class="ml-10 mt-10 text-h2">Participant Page</p>
        </v-col>
        <v-col cols="6" justify="end" align="end">
          <ParticipantModal ref="participantModal" @participant-registered="fetchParticipant" />
        </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="mt-15">
        <v-col cols="12" align="center" justify="center">
          <v-card class="ml-10 mr-10" height="460" elevation="3">
            <v-data-table-virtual class="table" :headers="participantHeaders" item-value="name" fixed-header :items="participants">
              <template v-slot:item.actions="{ item }">
                <v-row no-gutter justify="start" align="center">
                  <v-btn @click="editParticipant(item)" color="blue" class="mr-3">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn @click="deleteParticipant(item.id)" color="red">
                    <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
                </v-row>
              </template>
            </v-data-table-virtual>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </template>
  
  
  <script>
import { ref, onMounted } from 'vue';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/index';
import ParticipantModal from '@/components/participantModal.vue';

export default {
  name: 'ParticipantRegister',
  components: {
    ParticipantModal,
  },
  data() {
    return {
      participants: [],
      participantHeaders: [
        { title: 'Nome', align: "center", key: 'nome' },
        { title: 'Email', align: "center", key: 'email' },
        { title: 'Telefone', align: "center", key: 'telefone' },
        { title: 'Status', align: "center", key: 'status' },
        { title: '', key: 'actions', width: "20%" }
      ],
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
        console.error("Erro ao buscar os participantes: ", error);
      }
    },
    async deleteParticipant(id) {
      try {
        await deleteDoc(doc(db, 'participants', id));
        this.fetchParticipants();
      } catch (error) {
        console.error("Erro ao deletar o participante: ", error);
      }
    },
    editParticipant(participant) {
      this.$refs.participantModal.openModal('edit', participant);
    },
  },
  async mounted() {
    await this.fetchParticipants();
  },
}
</script>

  
  <style scoped>
  .page-title {
    font-family: 'Rubik', sans-serif;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
  }
  
  .table {
    padding: 5px 20px;
  }
  </style>
  