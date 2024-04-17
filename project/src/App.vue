<template>
  <v-app>
    <template v-if="$route.path === '/register' || $route.path === '/'">
      <v-row align="center" no-gutters>
        <v-main>
          <LateralBar />
          <router-view />
        </v-main>
      </v-row>
    </template>
    <template v-else>
      <v-row no-gutters >
        <v-app-bar :elevation="1" floating>
          <v-img width="300" src="@/styles/logo com o melao.svg" alt="logo melao" draggable="false" />
        </v-app-bar>
        <v-main>
          <LateralBar />
          <router-view />
        </v-main>
      </v-row>
    </template>
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
