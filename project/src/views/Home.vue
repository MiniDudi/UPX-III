<template>
  <v-col cols="12">
    <v-row no-gutter>
      <v-col cols="12">
        <p class="ml-10 mt-10 text-h2">Home Page</p>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-10">
      <v-col v-for="item in itens" :key="item" cols="2" style="margin: 20px;" align="center">

        <v-card @click="onCardClick()" width="220" height="300" elevation="7" border="5">
          <v-avatar color="#FFC641" size="80" class="mt-6" align="center" justify=center>
            <v-avatar color="surface-variant" size="70"><v-img src="@/styles/gato.jpeg"></v-img></v-avatar>
          </v-avatar>
          <v-card-text class="pb-0">Nome da Empresa</v-card-text>
          <p class="text-caption">Mercado</p>
          <v-card-text class="pb-0">Produtos Disponíveis</v-card-text>
          <p>3</p>

        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/index';

export default {
  name: 'HomePage',
  data() {
    return {
      itens: 33,
      participants: [],
    }
  },
  computed() {

  },
  created() {
    this.fetchParticipants();
  },
  methods: {
    onCardClick() {
      this.$router.push('/participants')
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
