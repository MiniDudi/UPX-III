<template>
    <v-navigation-drawer v-if="$route.path !== '/register' && $route.path != '/'" :width="200" align="center"
        justify="center" :elevation="1" permanent>
        <v-list density="compact" nav>
            <v-list-item to="/organization" height="70" class="mb-3 mt-3">
                <v-list-item-icon>
                    <v-icon v-if="$route.name == 'organizationPage'" color="#ffb300">mdi-briefcase</v-icon>
                    <v-icon v-else>mdi-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-content> <v-list-item-title>Organization</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item to="/home" height="70" class="mt-3">
                <v-list-item-icon>
                    <v-icon v-if="$route.name == 'homePage'" color="#ffb300">mdi-home</v-icon>
                    <v-icon v-else>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-list-item to="/group" height="70">
                <v-list-item-icon>
                    <v-icon v-if="$route.name == 'groupPage'" color="#ffb300">mdi-account-group</v-icon>
                    <v-icon v-else>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-content><v-list-item-title>Group</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-list-item to="/userConfig" height="70">
                <v-list-item-icon>
                    <v-icon v-if="$route.name == 'userPage'" color="#ffb300">mdi-account-circle</v-icon>
                    <v-icon v-else>mdi-account-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content> <v-list-item-title>Profile</v-list-item-title></v-list-item-content>
            </v-list-item>

            <v-list-item to="/settingsPage" height="70">
                <v-list-item-icon>
                    <v-icon v-if="$route.name == 'settingsPage'" color="#ffb300">mdi-cog</v-icon>
                    <v-icon v-else>mdi-cog</v-icon>
                </v-list-item-icon>
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
