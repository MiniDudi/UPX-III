<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="12">
                <p v-if="pageId" class="text-h2 mt-10 ml-10">Edit Donation</p>
                <p v-else class="text-h2 mt-10 ml-10">New Donation</p>
            </v-col>
        </v-row>
        <v-row no-gutters class="mt-15">
            <v-col cols="12">
                <v-card class="mr-10 ml-10" elevation="3">
                    <v-card-title>Add a new Donation</v-card-title>
                    <v-row no-gutters class="mr-5 ml-5">
                        <v-col cols="7">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Donation Title</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="donationTitle" label="Title" outlined
                                    prepend-icon="mdi-format-title"></v-text-field>
                            </v-row>
                        </v-col>
                        <v-col cols="5">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Participante</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-select v-model="donationDoador" label="Doador" :items="filter"
                                    prepend-icon="mdi-account" required></v-select>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="mr-5 ml-5">
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Donation Quantity</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="donationQuantity" label="Quantity" outlined
                                    prepend-icon="mdi-equalizer"></v-text-field>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Donation Condition</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="donationCondition" label="Condition" outlined
                                    prepend-icon="mdi-archive"></v-text-field>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="ml-5 mb-5" align="start" justify="center">
                        <v-col cols="12" align="start" justify="center">
                            <v-btn @click="goBack()" class="mr-3" rounded="0" elevation="0"
                                color="#FFC641">Return</v-btn>
                            <v-btn v-if="pageId" @click="handle()" rounded="0" elevation="0"
                                color="#FFC641">Update</v-btn>
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
import { collection, addDoc, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore';

export default {
    data() {
        return {
            pageId: null,
            donationTitle: '',
            donationCondition: '',
            donationQuantity: '',
            donationDoador: '',
            participants: [],
            participantTest: [
                { title: 'dudu', value: 1 },
            ]
        };
    },
    async created() {
        this.verifyPageId();
        if (this.pageId) {
            await this.getDonationById(this.pageId);
        }
        await this.loadParticipants();
    },
    computed: {
        filter() {
            const filter = this.participants.filter(participant => {
                return participant.status === 'Doador';
            });

            return filter.map(participant => ({
                ...participant,
              //  value: participant.id,
                title: participant.nome
            }));
        },
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
            if (this.donationTitle && this.donationCondition && this.donationQuantity && this.donationDoador) {
                try {
                    const donation = {
                        description: this.donationTitle,
                        quantity: this.donationQuantity,
                        condition: this.donationCondition,
                        doador: this.donationDoador,
                    };
                    await addDoc(collection(db, 'donations'), donation);
                    this.$emit('donation-registered');
                    this.$router.push('/donation');
                } catch (error) {
                    console.error("Erro ao cadastrar doação: ", error);
                }
            } else {
                console.log("Erro ao criar doação: campos obrigatórios não preenchidos.");
            }
        },
        async updateDonation() {
            if (this.donationTitle && this.donationCondition && this.donationQuantity && this.donationDoador) {
                try {
                    const donationRef = doc(db, 'donations', this.pageId);
                    await updateDoc(donationRef, {
                        description: this.donationTitle,
                        quantity: this.donationQuantity,
                        condition: this.donationCondition,
                        doador: this.donationDoador,
                    });
                    this.$emit('donation-registered');
                    this.$router.push('/donation');
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
                    this.donationTitle = donation.description;
                    this.donationQuantity = donation.quantity;
                    this.donationCondition = donation.condition;
                    this.donationDoador = donation.doador;
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Erro ao buscar doação: ", error);
            }
        },
        async loadParticipants() {
            try {
                const participantsSnapshot = await getDocs(collection(db, 'participants'));
                this.participants = [];
                participantsSnapshot.forEach((doc) => {
                    this.participants.push({ id: doc.id, ...doc.data() })
                });
            } catch (error) {
                console.error('Erro ao carregar participantes: ', error);
            }
        },
        verifyPageId() {
            if (this.$route.params.id) {
                this.pageId = this.$route.params.id;
            }
        },
        goBack() {
            this.$router.push('/donation');
        }
    },

}
</script>

<style scoped>
.page-title {
    font-family: "Rubik", sans-serif;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
}

.section-title {
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
}

.scroll-section {
    height: 300px;
    overflow-y: auto;
}

.table {
    padding: 5px 20px;
}

v-card {
    margin-bottom: 10px;
    padding: 10px;
}

v-btn {
    margin-top: 20px;
    color: #FFC641;
}
</style>
