<template>
  <v-app>
    <v-row v-if="$route.path === '/register' || $route.path === '/'" no-gutters />
    <v-row v-else no-gutters align="center" justify="center">
      <v-app-bar :elevation="1" floating>
        <v-img width="300" src="@/styles/logo com o melao.svg" alt="logo melao" draggable="false"/>
      </v-app-bar>
    </v-row>
    <v-main>
      <LateralBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LateralBar from '@/components/lateralBar.vue';

export default {
  name: 'AppVue',
  components: {
    LateralBar 
  },
  data() {
    return {
      
    }
  }

  
}
</script>