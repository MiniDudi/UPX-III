<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Group Page</p>
            </v-col>
            <v-col cols="6" justify="end" align="end">
            <MemberModal />
        </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mt-15">
        <v-col cols="12" align="center" justify="center">
            <v-card class="ml-10 mr-10" height="460" elevation="3">
                <v-data-table-virtual class="table" :headers="groupHeader" item-value="name" fixed-header>
                </v-data-table-virtual>
            </v-card>
        </v-col>
    </v-row>
</v-col>
</template>

<script>
import MemberModal from '@/components/memberModal.vue';

export default {
    name: 'GroupPage',
    components: {
        MemberModal,
    },
    data() {
        return {
            groupHeader: [
                { title: 'Crachá', align: 'start', key: 'id' },
                { title: 'Nome', align: 'center', key: 'nome' },
                { title: 'E-mail', align: 'center', key: 'email' },
                { title: 'Cargo', align: 'center', key: 'cargo' },
                { title: '', align: 'center', key: 'actions' },
            ],
        }
    },
    computed: {

    },
    created() {

    },
    methods: {

    }
}
</script>

<style>
.table {
    padding: 5px 20px 5px 20px;
}
</style>