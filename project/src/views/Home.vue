<template>
  <v-col cols="12">
    <v-row no-gutter>
      <v-col cols="12">
        <p class="ml-10 mt-10 text-h2">Home Page</p>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-10">
      <v-col cols="9">
        <v-row no-gutters>
          <v-col v-for="participant in participants" :key="participant.id" lg="3" md="4" sm="6" style="margin-bottom: 20px;"
            align="center">
            <v-card width="200" height="300" elevation="7" border="5" @click="onCardClick(participant.id)">
              <v-avatar color="#FFC641" size="80" class="mt-6" align="center" justify="center">
                <v-avatar color="surface-variant" size="70">
                  <v-img v-if="participant.avatar" :src="participant.avatar"></v-img>
                  <v-img v-else src="@/styles/gato.jpeg"></v-img>
                </v-avatar>
              </v-avatar>
              <v-card-text class="pb-0">{{ participant.nome }}</v-card-text>
              <p class="text-caption">Mercado</p>
              <v-card-text class="pb-0">Produtos Disponíveis</v-card-text>
              <p>3</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-card class="ml-2" height="620" elevation="7" border="5">
          <v-card-title class="side-bar" align="center" justify="center">Last twenty Links</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/index';

export default {
  name: 'HomePage',
  data() {
    return {
      participants: [],
    }
  },
  created() {
    this.fetchParticipants();
  },
  methods: {
    onCardClick(participantId) {
      this.$router.push(`/participants/${participantId}`);
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
  }
}
</script>

<style scoped>
.side-bar {
  color: #FFC641;
}
</style>
