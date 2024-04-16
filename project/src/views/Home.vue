<template>
  <v-row align="center" no-gutter>
    <v-col cols="6">
      <p class="ml-10 text-h2">Home Page</p>
    </v-col>
  </v-row>
</template>

<script>
import { db } from '../firebase/index'
import { onMounted } from 'vue';
import { doc, setDoc } from "firebase/firestore";

export default {
  name: 'HomePage',
  components: {},
  data: () => ({

  }),

  mounted() {

  },

  created() {

  },

  methods: {

  }

}

onMounted(() => {
  const cityRef = doc(db, 'cities', 'BJ');
  setDoc(cityRef, { capital: true }, { merge: true });
});

</script>
