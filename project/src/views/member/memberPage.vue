<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="6" justify="start" align="start">
                <p class="ml-10 mt-10 text-h2">Member Page</p>
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="mt-15">
            <v-col cols="12">
                <v-card class="ml-10 mr-10" elevation="3">
                    <v-row no-gutters align="center">
                        <v-col cols="8" align="center">
                            <v-text-field v-model="search" label="Search" class="ml-5 mt-4" variant="underlined"
                                prepend-icon="mdi-magnify"></v-text-field>
                        </v-col>
                        <v-col cols="4" align="center">
                            <v-btn class="mt-4" text="+ Member" elevation="0" rounded="0"
                                color="#FFC641" @click="newMember"></v-btn>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-data-table :headers="groupHeader" :items="filteredParticipants" :search="search"
                            :items-per-page="10" class="table" fixed-header>
                            <template v-slot:item.actions="{ item }">
                                <v-row no-gutter justify="start" align="center">
                                    <v-btn @click="updateMember(item)" color="blue" class="mr-3" elevation="0"
                                        rounded="0">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn @click="" color="red" elevation="0" rounded="0">
                                        <v-icon>mdi-trash-can</v-icon>
                                    </v-btn>
                                </v-row>
                            </template>
                        </v-data-table>
                    </v-row>
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
            search: '',
            groupHeader: [
                { title: 'Crachá', align: 'start', key: 'id' },
                { title: 'Nome', align: 'start', key: 'name' },
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
        filteredParticipants() {
            return this.groupData.filter(participant => {
                return participant.name.toLowerCase().includes(this.search.toLowerCase()) ||
                    participant.email.toLowerCase().includes(this.search.toLowerCase()) ||
                    participant.position.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },
    created() {

    },
    methods: {
        newMember() {
            this.$router.push('/members/create')
        },
        updateMember(item) {
            this.$router.push(`/member/update/${item.id}`)
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