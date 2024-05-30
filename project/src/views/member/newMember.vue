<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="12">
                <p class="text-h2 mt-10 ml-10">New Member</p>
            </v-col>
        </v-row>
        <v-row no-gutters class="mt-15">
            <v-col cols="12">
                <v-card class="mr-10 ml-10" elevation="3">
                    <v-card-title>Add a new Member</v-card-title>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Member Name</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="memberName" label="Name" outlined
                                    prepend-icon="mdi-account"></v-text-field></v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Member E-mail</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="memberEmail" label="E-mail" outlined
                                    prepend-icon="mdi-email"></v-text-field></v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Password</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="memberPassword" label="Password" outlined type="password"
                                    prepend-icon="mdi-lock"></v-text-field></v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Repeat Password</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="repeatPassword" label="Repeat Password" outlined type="password"></v-text-field></v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="12">
                            <div class="text-subtitle-1 text-medium-emphasis">You must confirm this checkbox to continue</div>
                            <v-checkbox v-model="isReceptor" label="Terms Agreement"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="ml-5 mb-5" align="start" justify="center">
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
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

export default {
    data() {
        return {
            pageId: null,
            memberName: '',
            memberEmail: '',
            memberPassword: '',
            repeatPassword: '',
            isReceptor: false,
        }
    },
    async created() {
        this.verifyPageId();
        if (this.pageId) {
            await this.getMemberById(this.pageId); 
        }
    },
    methods: {
        handle() {
            if (this.pageId) {
                this.updateMember();
            } else {
                this.createMember();
            }
        },
        async createMember() {
            if (this.memberName && this.memberEmail && this.memberPassword && this.memberPassword === this.repeatPassword) {
                try {
                    const member = {
                        nome: this.memberName,
                        email: this.memberEmail,
                        senha: this.memberPassword,
                        isReceptor: this.isReceptor,
                    };
                    await addDoc(collection(db, 'members'), member);
                    this.$emit('member-registered');
                    this.$router.push('/members');
                } catch (error) {
                    console.error("Erro ao cadastrar o novo membro: ", error);
                }
            } else {
                console.error("As senhas não coincidem.");
            }
        },
        async updateMember() {
            if (this.memberName && this.memberEmail && this.memberPassword && this.memberPassword === this.repeatPassword) {
                try {
                    const membersRef = doc(db, 'members', this.pageId);
                    await updateDoc(membersRef, {
                        nome: this.memberName,
                        email: this.memberEmail,
                        senha: this.memberPassword,
                        isReceptor: this.isReceptor,
                    });
                    this.$emit('member-registered');
                    this.$router.push('/members');
                } catch (error) {
                    console.error("Erro ao atualizar o membro: ", error);
                }
            } else {
                console.error("As senhas não coincidem.");
            }
        },
        async getMemberById(id) {
            try {
                const memberRef = doc(db, 'members', id);
                const memberSnap = await getDoc(memberRef);
                if (memberSnap.exists()) {
                    const member = memberSnap.data();
                    this.memberName = member.nome;
                    this.memberEmail = member.email;
                    this.memberPassword = member.senha;
                    this.isReceptor = member.isReceptor;
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Erro ao buscar membro: ", error);
            }
        },
        verifyPageId() {
            if (this.$route.params.id) {
                this.pageId = this.$route.params.id;
            }
        },
        goBack() {
            this.$router.push('/members');
        },
    }
}
</script>
