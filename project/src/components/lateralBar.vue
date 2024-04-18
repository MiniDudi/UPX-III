<template>
    <v-navigation-drawer v-if="$route.path !== '/register' && $route.path != '/'" :width="200" align="center"
        justify="center" :elevation="1" permanent>
        <v-list density="compact" nav>
            <v-list-item to="/organization" height="70" class="mb-3 mt-3" color="#ffb300" draggable="false" s>
                <v-list-item-icon><v-icon >mdi-briefcase</v-icon></v-list-item-icon>
                <v-list-item-content> <v-list-item-title>Organization</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item to="/home" height="70" class="mt-3" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon >mdi-home</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-list-item to="/group" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon >mdi-account-group</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Group</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-list-item to="/userConfig" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon >mdi-account-circle</v-icon></v-list-item-icon>
                <v-list-item-content> <v-list-item-title>Profile</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-list-item to="/settingsPage" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Settings</v-list-item-title></v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
</script>

<style>
v-list-item {
    margin: 20px !important;
}
</style>
