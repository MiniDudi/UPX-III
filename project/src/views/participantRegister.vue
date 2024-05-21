<template>
  <v-col cols="12">
    <v-row no-gutters>
      <v-col cols="6" justify="start" align="start">
        <p class="ml-10 mt-10 text-h2">Participant Page</p>
      </v-col>
      <!-- <v-col cols="6" justify="end" align="end">
                <ParticipantModal />
            </v-col> -->
      <v-col cols="6" justify="end" align="end">
        <v-btn class="mr-10 mt-15" v-bind="activatorProps" text="Add Participant" elevation="0" color="#FFC641"
          @click="newParticipant()"></v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mt-15">
      <v-col cols="12" align="center" justify="center">
        <v-card class="ml-10 mr-10" height="460" elevation="3">
          <v-data-table-virtual class="table" :headers="participantHeaders" item-value="name" fixed-header
            :items="participantData">
            <template v-slot:item.actions="{ item }">
              <v-row no-gutter justify="start" align="center">
                <v-btn @click="deleteItem(item)" color="blue" class="mr-3"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn @click="deleteItem(item)" color="red"><v-icon>mdi-trash-can</v-icon></v-btn>
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
      selectedParticipant: null,
      participantHeaders: [
        { title: 'id', key: 'id' },
        { title: 'Nome', key: 'name' },
        { title: 'Email', key: 'email' },
        { title: 'Telefone', key: 'phone' },
        { title: '', align: "center", key: 'actions', width: '20%' }
      ],
      participantData: [
        { id: '1', name: 'João Silva', email: 'joao@example.com', phone: '123456789', actions: null },
        { id: '2', name: 'Maria Souza', email: 'maria@example.com', phone: '987654321', actions: null },
        { id: '3', name: 'Carlos Oliveira', email: 'carlos@example.com', phone: '555666777', actions: null },
        { id: '4', name: 'Ana Santos', email: 'ana@example.com', phone: '111222333', actions: null },
        { id: '5', name: 'Pedro Almeida', email: 'pedro@example.com', phone: '999888777', actions: null }
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
        console.error("Erro ao buscar os participantes: ", error);
      }
    },
    selectParticipant(participant) {
      this.selectedParticipant = participant;
    },
    openModal(mode, participant = null) {
      const modal = this.$refs.participantModal;
      modal.openModal(mode, participant);
    },
    newParticipant() {
      this.$router.push('/participant/create')
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