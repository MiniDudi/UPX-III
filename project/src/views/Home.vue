<template>
  <HelloWorld />
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { db } from '../firebase/index'
import { onMounted } from 'vue';
import { doc, setDoc } from "firebase/firestore";

onMounted(() => {
  const cityRef = doc(db, 'cities', 'BJ');
  setDoc(cityRef, { capital: true }, { merge: true });
});

</script>
