<template>
    <v-dialog max-width="500" max-height="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn class="mr-10 mt-15" v-bind="activatorProps" text="New Member" elevation="0" roudend="0"
                color="#FFC641"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Adicionar Membro a Organização" class="mt-5">
                <v-card-text class="mt-5 mb-5">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="name" label="Member's full name" variant="underlined"
                                clearable="true" />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="email" label="Member's e-mail" variant="underlined" clearable="" />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="password" label="Password" variant="underlined" clearable="" />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="repeatPassword" label="Repeat Password" variant="underlined"
                                clearable="" />
                        </v-col>
                    </v-row>
                    <v-row align="end" justify="end" no-gutters>
                        <v-card-actions>
                            <v-btn text="Close" @click="isActive.value = false"></v-btn>
                            <v-spacer></v-spacer>
                            <v-btn text="Add User" @click="createUser()"></v-btn>
                        </v-card-actions>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
import AuthController from '../controller/authController'

export default {
    name: 'MemeberModal',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
            

        }
    },
    methods: {
        async createUser() {
            const auth = new AuthController();
            const res = await auth.createUser();
            return res;

        }
    },
}


</script>