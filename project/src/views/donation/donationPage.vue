<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Donation Page</p>
            </v-col>
            <!-- <v-col cols="6" justify="end" align="end">
                <DonationModal />
            </v-col> -->
        </v-row>
        <v-row no-gutters align="center" justify="center" class="mt-15">
            <v-col cols="12" align="center" justify="center">
                <v-card class="ml-10 mr-10" height="460" elevation="3">
                    <v-row no-gutters align="center">
                        <v-col cols="6" align="center">
                            <v-btn class="mt-4" v-bind="activatorProps" text="+ Donation" elevation="0" rounded="0"
                                color="#FFC641" @click="newParticipant()"></v-btn>
                        </v-col>
                        <v-col cols="6" align="center">
                            <v-text-field v-model="search" label="Search" class=" mr-5 mt-4" variant="underlined"
                                prepend-icon="mdi-magnify"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-data-table-virtual class="table" :headers="donationHeaders" item-value="name" fixed-header
                            :items="filteredDonations" height="400">
                            <template v-slot:item.actions="{ item }">
                                <v-row no-gutter justify="start" align="center">
                                    <v-btn @click="editDonation(item)" color="blue" class="mr-3" elevation="0"
                                        rounded="0"><v-icon>mdi-pencil</v-icon></v-btn>
                                    <v-btn @click="deleteDonation(item)" color="red" elevation="0"
                                        rounded="0"><v-icon>mdi-trash-can</v-icon></v-btn>
                                </v-row>
                            </template>
                        </v-data-table-virtual>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import DonationModal from '@/components/donationModal.vue';
import { db } from '../../firebase/index';

export default {
    name: 'DonationRegister',
    components: {
        DonationModal,
    },
    data() {
        return {
            donations: [],
            selectedDonation: null,
            search: '',
            donationHeaders: [
                { title: 'id', key: 'id' },
                { title: 'Descrição', align: "center", key: 'description' },
                { title: 'Quantidade', align: "center", key: 'quantity' },
                { title: 'Condição', align: "center", key: 'condition' },
                { title: '', key: 'actions', width: "20%" }
            ],
            donationData: [
                { id: 1, description: 'Livro', quantity: 3, condition: 'Novo' },
                { id: 2, description: 'Roupa', quantity: 5, condition: 'Usado' },
                { id: 3, description: 'Eletrônico', quantity: 2, condition: 'Danificado' },
                { id: 4, description: 'Brinquedo', quantity: 10, condition: 'Novo' },
                { id: 5, description: 'Móveis', quantity: 1, condition: 'Usado' },
            ],

        };
    },
    computed: {
        filteredDonations() {
            return this.donations.filter(donation => {
                return donation.description.toLowerCase().includes(this.search.toLowerCase()) ||
                    donation.condition.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },
    async created() {
        await this.fetchDonations();
    },
    methods: {
        async fetchDonations() {
            try {
                const querySnapshot = await getDocs(collection(db, 'donations'));
                this.donations = [];
                querySnapshot.forEach((doc) => {
                    this.donations.push({ id: doc.id, ...doc.data() });
                });
            } catch (error) {
                console.error("Erro ao buscar doações: ", error);
            }
        },
        async deleteDonation(item) {
            try {
                const donationRef = doc(db, 'donations', item.id);
                await deleteDoc(donationRef);
                this.$emit('donation-registered');
                this.fetchDonations();
            } catch (error) {
                console.error("Erro ao excluir doação: ", error);
            }
        },
        newDonation() {
            this.$router.push('/donation/create');
        },
        editDonation(item) {
            this.$router.push(`/donation/update/${item.id}`)
        }
    },

}
</script>

<style scoped>
.page-title {
    font-family: 'Rubik', sans-serif;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
}

.table {
    padding: 0px 20px 0px 20px;
}
</style>