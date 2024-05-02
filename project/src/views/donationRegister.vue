<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Donation Page</p>
            </v-col>
            <v-col cols="6" justify="end" align="end">
                <DonationModal />
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="mt-15">
            <v-col cols="12" align="center" justify="center">
                <v-card class="ml-10 mr-10" height="460" elevation="3">
                    <v-data-table-virtual class="table" :headers="donationHeaders" item-value="name" fixed-header
                        :items="donationData">
                        <template v-slot:item.actions="{ item }">
                            <v-row no-gutter justify="start" align="center">
                                <v-btn @click="deleteItem(item)" color="blue"
                                    class="mr-3"><v-icon>mdi-pencil</v-icon></v-btn>
                                <v-btn @click="deleteItem(item)" color="red"><v-icon>mdi-trash-can</v-icon></v-btn>
                            </v-row>
                        </template>
                    </v-data-table-virtual>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import DonationModal from '@/components/donationModal.vue';
import { db } from '../firebase/index';

export default {
    name: 'DonationRegister',
    components: {
        DonationModal,
    },
    data() {
        return {
            donations: [],
            selectedDonation: null,
            donationHeaders: [
                { title: 'Descrição', align: "center", key: 'description' },
                { title: 'Quantidade', align: "center", key: 'quantity' },
                { title: 'Condição', align: "center", key: 'condition' },
                { title: '', key: 'actions', width: "20%"}
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
        openModal(mode, donation = null) {
            const modal = this.$refs.donationModal;
            modal.openModal(mode, donation);
        },
        editSelectedDonation() {
            if (this.selectedDonation) {
                this.openModal('edit', this.selectedDonation);
            }
        },
        deleteSelectedDonation() {
            if (this.selectedDonation) {
                this.openModal('delete', this.selectedDonation);
            }
        },
    },
    async mounted() {
        await this.fetchDonations();
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
    padding: 5px 20px;
}
</style>
