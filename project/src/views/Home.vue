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
          <v-col v-for="participant in participants" :key="participant" cols="2" style="margin-bottom: 20px;"
            align="center">
            <v-card @click="onCardClick()" width="200" height="300" elevation="7" border="5">
              <v-avatar color="#FFC641" size="80" class="mt-6" align="center" justify=center>
                <v-avatar color="surface-variant" size="70"><v-img src="@/styles/gato.jpeg"></v-img></v-avatar>
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
          <v-card-title class="side-bar" align="center" justify="center">Last twenty registered
            participants</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      itens: 14,
    }
  },
  computed() {
    
  },
  created() {

  },
  methods: {
    onCardClick() {
      this.$router.push('/organization')
    }
  }

}

</script>
