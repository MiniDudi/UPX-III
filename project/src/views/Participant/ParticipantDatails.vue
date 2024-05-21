<template>
    <v-col cols="12">
        <v-row no-gutter>
            <v-col cols="12">
                <p class="ml-10 mt-10 text-h2">Participants "{{  }}" Detail</p>
            </v-col>
        </v-row>
    </v-col>
</template>
<script>
export default {
    name: 'ParticipantDetails',
    data() {
        return {

        }
    },
    created() {

    },
    computed: {

    },
    methods: {

    }
}

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const participantsCollection = collection(db, "participants");

export const addDonation = async (participants) => {
  try {
    const docRef = await addDoc(participantsCollection, participants);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

</script>

