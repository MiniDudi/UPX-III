<template>
  <v-row no-gutter>
    <v-col cols="12">
      <p class="ml-10 mt-10 text-h2">Home Page</p>
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
