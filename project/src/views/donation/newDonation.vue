<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="12">
                <p class="text-h2 mt-10 ml-10">New Donation</p>
            </v-col>
        </v-row>
        <v-row no-gutters class="mt-15">
            <v-col cols="12">
                <v-card class="mr-10 ml-10" elevation="3">
                    <v-card-title>Add a new Donation</v-card-title>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="12">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Donation Title</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="donationTitle" label="Title" outlined prepend-icon="mdi-format-title"></v-text-field></v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Donation quantity</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="donationQuantity" label="Quantity" outlined prepend-icon="mdi-equalizer"></v-text-field></v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Donation Condition</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="donationCondition" label="Condition" outlined prepend-icon="mdi-archive"></v-text-field></v-row>
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
            donationTilte: '',
            donationCondition: '',
            donationQuantity: ''
        }
    },
    methods: {
        create() {
            
        },
        goBack() {
            this.$router.push('/donationRegister')
        }
    }
}

</script>