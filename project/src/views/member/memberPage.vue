<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Members Page</p>
            </v-col>
            <!-- <v-col cols="6" justify="end" align="end">
                <MemberModal />
            </v-col> -->
            <v-col cols="6" justify="end" align="end">
                <v-btn class="mr-10 mt-15" v-bind="activatorProps" text="Add Member" elevation="0"
                    color="#FFC641" @click="newMember()"></v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="mt-15">
            <v-col cols="12" align="center" justify="center">
                <v-card class="ml-10 mr-10" height="460" elevation="3">
                    <v-data-table-virtual class="table" :headers="groupHeader" item-value="name" fixed-header
                        :items="groupData">
                        <template v-slot:item.actions="{ item }">
                            <v-btn @click="deleteItem(item)" color="red"><v-icon>mdi-trash-can</v-icon></v-btn>
                        </template>
                    </v-data-table-virtual>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    name: 'MemberPage',
    data() {
        return {
            groupHeader: [
                { title: 'Crachá', align: 'start', key: 'id' },
                { title: 'Nome', align: 'center', key: 'name' },
                { title: 'E-mail', align: 'center', key: 'email' },
                { title: '', align: 'center', key: 'actions' },
            ],
            groupData: [
                { id: 1, name: 'John', email: 'john@example.com', position: 'Developer' },
                { id: 2, name: 'Maria', email: 'maria@example.com', position: 'Designer' },
                { id: 3, name: 'Ana', email: 'ana@example.com', position: 'Analyst' },
                { id: 4, name: 'Carlos', email: 'carlos@example.com', position: 'Project Manager' },
                { id: 5, name: 'Dev', email: 'melaodev@gmail.com', position: 'Software Engineer' },
            ],
        }
    },
    computed: {

    },
    created() {

    },
    methods: {
        newMember() {
            this.$router.push('/members/create')
        },
        deleteItem(item) {
        },
    }
}
</script>

<style>
.table {
    padding: 5px 20px 5px 20px;
}
</style>