<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Cadastro de Doação</p>
            </v-col>
            <v-col cols="10" justify="end" align="center">
                <!-- Botão de Adicionar Doação -->
                <DonationModal ref="donationModal" />
                <!-- Botão de Eidtar Doação -->
                <DonationModal ref="donationModal" />
                <!-- Botão de Excluir Doação -->
                <DonationModal ref="donationModal" />
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="mt-15">
            <v-col cols="12" align="center" justify="center">
                <v-card class="ml-10 mr-10" height="460" elevation="3">
                    <v-data-table-virtual class="table" :headers="donationHeaders" item-value="description" fixed-header>
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
                { title: 'Descrição', key: 'description' },
                { title: 'Quantidade', key: 'quantity' },
                { title: 'Condição', key: 'condition' },
            ]
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
