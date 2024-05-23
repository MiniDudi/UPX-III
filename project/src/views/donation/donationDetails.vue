<template>
  <v-col cols="12">
    <v-row no-gutter>
      <v-col cols="12">
        <p class="ml-10 mt-10 text-h2">Donation "{{ }}" Detail</p>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default {
  name: 'DontationDetails',
  data() {
    return {

    }
  },
  created() {

  },
  computed: {

  },
  methods: {
    // async addDonation(donation) {
    //   try {
    //     const donationsCollection = collection(db, "donations");
    //     const docRef = await addDoc(donationsCollection, donation);
    //     console.log("Document written with ID: ", docRef.id);
    //     return docRef.id;
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //     throw e;
    //   }
    // },
  }
}
</script>