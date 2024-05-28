<template>
    <v-navigation-drawer v-if="$route.path !== '/register' && $route.path != '/'" :width="200" align="center"
        justify="center" :elevation="1" :permanent="md">
        <v-list density="compact" nav>

            <!-- Item Home -->
            <v-list-item to="/home" height="70" class="mt-3" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-home-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <!-- Item Group -->
            <v-list-item to="/members" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-group-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Members</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Donations -->
            <v-list-item to="/link" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-hand-extended-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Link donation</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Participant Register -->
            <v-list-item to="/participants" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-plus-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Participants</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Donation Register -->
            <v-list-item to="/donation" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-package-variant-plus</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Donations</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Settings -->
            <v-list-item to="/settingsPage" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-cog-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Settings & Profile</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <!-- Item da Organização -->
            <v-list-item to="/about" height="70" class="mb-3 mt-3" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-information-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>About</v-list-item-title></v-list-item-content>
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
