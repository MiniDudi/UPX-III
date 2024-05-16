<template>
    <v-navigation-drawer v-if="$route.path !== '/register' && $route.path != '/'" :width="200" align="center"
        justify="center" :elevation="1" permanent>
        <v-list density="compact" nav>

            <!-- Item Home -->
            <v-list-item to="/home" height="70" class="mt-3" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-home-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <!-- Item Group -->
            <v-list-item to="/group" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-group-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Group</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Donations -->
            <v-list-item to="/donations" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-hand-extended-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Donations</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Participant Register -->
            <v-list-item to="/participantRegister" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-plus-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Participant Register</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Donation Register -->
            <v-list-item to="/donationRegister" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-package-variant-plus</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Donation Register</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Settings -->
            <v-list-item to="/settingsPage" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-cog-outline</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Settings & Profile</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <!-- Item da Organização -->
            <v-list-item to="/organization" height="70" class="mb-3 mt-3" color="#ffb300" draggable="false">
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
