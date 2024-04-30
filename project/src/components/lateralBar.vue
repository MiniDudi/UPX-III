<template>
    <v-navigation-drawer v-if="$route.path !== '/register' && $route.path != '/'" :width="200" align="center"
        justify="center" :elevation="1" permanent>
        <v-list density="compact" nav>
           
            <!-- Item Home -->
            <v-list-item to="/home" height="70" class="mt-3" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <!-- Item Group -->
            <v-list-item to="/group" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-group</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Group</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Profile -->
            <v-list-item to="/userConfig" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-circle</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Profile</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Settings -->
            <v-list-item to="/settingsPage" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Settings</v-list-item-title></v-list-item-content>
            </v-list-item>
            
            <!-- Item Donations -->
            <v-list-item to="/donations" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-gift</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Donations</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Participant Register -->
            <v-list-item to="/participantRegister" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-account-plus</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Participant Register</v-list-item-title></v-list-item-content>
            </v-list-item>

            <!-- Item Donation Register -->
            <v-list-item to="/donationRegister" height="70" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-package-variant-plus</v-icon></v-list-item-icon>
                <v-list-item-content><v-list-item-title>Donation Register</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

             <!-- Item da Organização -->
             <v-list-item to="/organization" height="70" class="mb-3 mt-3" color="#ffb300" draggable="false">
                <v-list-item-icon><v-icon>mdi-briefcase</v-icon></v-list-item-icon>
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
