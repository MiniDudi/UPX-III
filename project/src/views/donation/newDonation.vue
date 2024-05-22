<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="12">
                <p v-if="this.pageId" class="text-h2 mt-10 ml-10">Edit Donation</p>
                <p v-else class="text-h2 mt-10 ml-10">New Donation</p>
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
                                <v-text-field v-model="donationTilte" label="Title" outlined
                                    prepend-icon="mdi-format-title"></v-text-field></v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Donation quantity</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="donationQuantity" label="Quantity" outlined
                                    prepend-icon="mdi-equalizer"></v-text-field></v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Donation Condition</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="donationCondition" label="Condition" outlined
                                    prepend-icon="mdi-archive"></v-text-field></v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="ml-5 mb-5" align="start" justify="center">
                        <v-col cols="12" align="start" justify="center">
                            <v-btn @click="goBack()" class="mr-3" rounded="0" elevation="0"
                                color="#FFC641">Return</v-btn>
                            <v-btn v-if="this.pageId" @click="handle()" rounded="0" elevation="0" color="#FFC641">Update</v-btn>
                            <v-btn v-else @click="handle()" rounded="0" elevation="0" color="#FFC641">Create</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import { db } from '../../firebase/index';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';

export default {
    data() {
        return {
            pageId: null,
            donations: [],
            donationTilte: '',
            donationCondition: '',
            donationQuantity: '',
        }
    },
    async created() {
        this.verifyPageId();
        if (this.pageId) {
            await this.getDonationById(this.pageId);
        }
    },
    methods: {
        handle() {
            if (this.pageId) {
                this.updateDonation();
            } else {
                this.createDonation();
            }
        },
        async createDonation() {
            if (this.donationTilte && this.donationCondition && this.donationQuantity) {
                try {
                    const donation = {
                        description: this.donationTilte,
                        quantity: this.donationQuantity,
                        condition: this.donationCondition
                    };
                    await addDoc(collection(db, 'donations'), donation);
                    this.$emit('donation-registered');
                    this.$router.push('/donation')
                } catch (error) {
                    console.error("Erro ao cadastrar doação: ", error);
                }
            } else {
                return console.log("Erro to create donation");
            }
        },
        async updateDonation() {
            if (this.donationTilte && this.donationCondition && this.donationQuantity) {
                try {
                    const donationRef = doc(db, 'donations', this.pageId);
                    await updateDoc(donationRef, {
                        description: this.donationTilte,
                        quantity: this.donationQuantity,
                        condition: this.donationCondition
                    });
                    this.$emit('donation-registered');
                    this.$router.push('/donation')
                } catch (error) {
                    console.error("Erro ao atualizar doação: ", error);
                }
            }
        },
        async getDonationById(id) {
            try {
                const donationRef = doc(db, 'donations', id);
                const donationSnap = await getDoc(donationRef);
                if (donationSnap.exists()) {
                    const donation = donationSnap.data();
                    this.donationTilte = donation.description;
                    this.donationQuantity = donation.quantity;
                    this.donationCondition = donation.condition;
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Erro ao buscar doação: ", error);
            }
        },
        verifyPageId() {
            if (this.$route.params.id) {
                this.pageId = this.$route.params.id;
            } else {
                return;
            }
        },
        goBack() {
            this.$router.push('/donation')
        }
    }
}

</script>