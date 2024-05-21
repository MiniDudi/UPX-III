<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="12">
                <p class="text-h2 mt-10 ml-10">New Participant</p>
            </v-col>
        </v-row>
        <v-row no-gutters class="mt-15">
            <v-col cols="12">
                <v-card class="mr-10 ml-10" elevation="3">
                    <v-card-title>Add a new Participant</v-card-title>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="12">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Participant Name</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="participantEmail" label="Name" outlined prepend-icon="mdi-account"></v-text-field></v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Participant E-mail</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="participantName" label="E-mail" outlined prepend-icon="mdi-email"></v-text-field></v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Participant Phone</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="participantPhone" label="Phone" outlined prepend-icon="mdi-phone"></v-text-field></v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="ml-5 mb-5" align="start" justify="center">
                        <v-col cols="12" align="start" justify="center">
                            <v-btn @click="goBack()" class="mr-3" rounded="0" elevation="0" color="#FFC641">Return</v-btn>
                            <v-btn @click="create()" rounded="0" elevation="0" color="#FFC641">Create</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>

export default {
    data() {
        return {
            participantName: '',
            participantEmail: '',
            participantPhone: ''
        }
    },
    methods: {
        create() {
            
        },
        goBack() {
            this.$router.push('/participantRegister')
        }
    }
}

</script>