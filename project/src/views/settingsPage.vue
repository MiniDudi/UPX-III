<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6">
                <p class="ml-10 mt-10 text-h2">Settings Page</p>
            </v-col>
            <v-col cols="6" align="end" justify="end">
                <v-btn class="mt-15 mr-10" color="red" elevation="0" append-icon="mdi-logout">Logout</v-btn>
            </v-col>
        </v-row>
        <v-card class="mt-16 ml-10" height="200" justify="center" elevation="3">
            <v-card-title>E-mail</v-card-title>
            <v-row no-gutters>
                <v-col cols="6">

                </v-col>
                <v-col cols="60">

                </v-col>
            </v-row>
        </v-card>
        <v-card class="mt-10 ml-10" height="200" justify="center" elevation="3">
            <v-card-title>Password</v-card-title>
            <v-row no-gutters>
                <v-col cols="6">

                </v-col>
                <v-col cols="60">

                </v-col>
            </v-row>
        </v-card>
    </v-col>
</template>
<script>
export default {
    name: 'SettingsPage',
    data() {
        return {

        }
    },
}
</script>
