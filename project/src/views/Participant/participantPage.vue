<template>
  <v-col cols="12">
    <v-row no-gutters>
      <v-col cols="6" justify="start" align="start">
        <p class="ml-10 mt-10 text-h2">Participant Page</p>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mt-15">
      <v-col cols="12">
        <v-card class="ml-10 mr-10" elevation="3">
          <v-row no-gutters align="center">
            <v-col cols="8" align="center">
              <v-text-field v-model="search" label="Search" class="ml-5 mt-4" variant="underlined"
                prepend-icon="mdi-magnify"></v-text-field>
            </v-col>
            <v-col cols="4" align="center">
              <v-btn class="mt-4" text="+ Participant" elevation="0" rounded="0" color="#FFC641"
                @click="newParticipant"></v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-data-table :headers="participantHeaders" :items="filteredParticipants" :search="search"
              :items-per-page="10" class="table" fixed-header>
              <template v-slot:item.actions="{ item }">
                <v-row no-gutter justify="start" align="center">
                  <v-btn @click="updateParticipant(item)" color="blue" class="mr-3" elevation="0" rounded="0">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn @click="deleteParticipant(item)" color="red" elevation="0" rounded="0">
                    <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
                </v-row>
              </template>
            </v-data-table>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/index';

export default {
  name: 'ParticipantRegister',
  data() {
    return {
      participants: [],
      search: '',
      participantHeaders: [
        { title: 'Nome', align: 'start', value: 'nome' },
        { title: 'Email', align: 'start', value: 'email' },
        { title: 'Telefone', align: 'center', value: 'telefone' },
        { title: 'Status', align: 'center', value: 'status' },
        { title: '', value: 'actions', align: 'center', sortable: false, }
      ]
    };
  },
  computed: {
    filteredParticipants() {
      return this.participants.filter(participant => {
        return participant.nome.toLowerCase().includes(this.search.toLowerCase()) ||
          participant.email.toLowerCase().includes(this.search.toLowerCase()) ||
          participant.telefone.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  async created() {
    await this.fetchParticipants();
  },
  methods: {
    newParticipant() {
      this.$router.push('/participant/create')
    },
    updateParticipant(item) {
      this.$router.push(`/participant/update/${item.id}`)
    },
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
    async deleteParticipant(item) {
      try {
        const participantRef = doc(db, 'participants', item.id);
        await deleteDoc(participantRef);
        this.$emit('participant-registered');
        this.fetchParticipants();
      } catch (error) {
        console.error("Erro ao excluir participante: ", error);
      }
    }
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
  padding: 0px 20px 0px 20px;
}
</style>
