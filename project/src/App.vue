<template>
  <v-app>
    <v-row v-if="$route.path === '/register' || $route.path === '/'" no-gutters />
    <v-row v-else no-gutters align="center">
      <v-app-bar :elevation="1">
          <v-img width="300" src="@/styles/logo com o melao.svg" alt="logo melao" draggable="false" />
      </v-app-bar>
    </v-row>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
