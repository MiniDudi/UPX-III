<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="12">
                <p v-if="this.pageId" class="text-h2 mt-10 ml-10">Edit Participant</p>
                <p v-else class="text-h2 mt-10 ml-10">New Participant</p>
            </v-col>
        </v-row>
        <v-row no-gutters class="mt-15">
            <v-col cols="12">
                <v-card class="mr-10 ml-10" elevation="3">
                    <v-card-title>Add a new Participant</v-card-title>
                    <v-row no-gutter class="mr-5 ml-5" align="center" justify="center">
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Participant Name</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="participantName" label="Name" outlined
                                    prepend-icon="mdi-account"></v-text-field></v-row>
                        </v-col>
                        <v-col cols="4">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Participant Picture</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-file-input @change="onFileChange" :rules="rules" accept="image/png, image/jpeg, image/bmp" label="Avatar"
                                    placeholder="Pick an avatar" prepend-icon="mdi-camera"></v-file-input>
                            </v-row>
                        </v-col>
                        <v-col cols="2" align="center" justify="center">
                            <v-avatar color="#FFC641" size="150" class="mt-6" align="center">
                                <v-avatar color="surface-variant" size="130">
                                    <img v-if="selectedImageUrl" :src="selectedImageUrl" alt="Participant Avatar">
                                </v-avatar>
                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-row no-gutter class="mr-5 ml-5">
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Participant E-mail</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="participantEmail" label="E-mail" outlined
                                    prepend-icon="mdi-email"></v-text-field></v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <div class="text-subtitle-1 text-medium-emphasis">Participant Phone</div>
                            </v-row>
                            <v-row no-gutters align="center" justify="center">
                                <v-text-field v-model="participantPhone" label="Phone" outlined
                                    prepend-icon="mdi-phone"></v-text-field></v-row>
                        </v-col>
                    </v-row>
                <v-row no-gutters class="mr-5 ml-5">
                    <v-col cols="12">
                       <v-radio-group v-model="status" inline>
                       <template v-slot:label>
                         <div class="mt-5">This participant is <strong>Receptor</strong> or <strong>Donator</strong>?</div>
                       </template>
                       <v-radio label="Receptor" value="Receptor"></v-radio>
                       <v-radio label="Doador" value="Doador"></v-radio>
                       </v-radio-group>
                     </v-col>
                </v-row>

                    <v-row no-gutter class="ml-5 mb-5" align="start" justify="center">
                        <v-col cols="12" align="start" justify="center">
                            <v-btn @click="goBack()" class="mr-3" rounded="0" elevation="0"
                                color="#FFC641">Return</v-btn>
                            <v-btn v-if="this.pageId" @click="handle()" rounded="0" elevation="0"
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
            participantName: '',
            participantEmail: '',
            participantPhone: '',
            selectedImageUrl: '',
            status: '', 
        }
    },
    async created() {
        this.verifyPageId();
        if (this.pageId) {
            await this.getParticipantById(this.pageId); 
        }
    },
    methods: {
        handle() {
            if (this.pageId) {
                this.updateParticipant();
            } else {
                this.createParticipant();
            }
        },
        async createParticipant() {
            if (this.participantName && this.participantEmail && this.participantPhone && this.status) {
                try {
                    const participant = {
                        nome: this.participantName,
                        email: this.participantEmail,
                        telefone: this.participantPhone,
                        status: this.status,
                        avatar: this.selectedImageUrl,
                    };
                    await addDoc(collection(db, 'participants'), participant);
                    this.$emit('participant-registered');
                    this.$router.push('/participants');
                } catch (error) {
                    console.error("Erro ao cadastrar participante: ", error);
                }
            }
        },
        async updateParticipant() {
            if (this.participantName && this.participantEmail && this.participantPhone && this.status) {
                try {
                    const participantRef = doc(db, 'participants', this.pageId);
                    await updateDoc(participantRef, {
                        nome: this.participantName,
                        email: this.participantEmail,
                        telefone: this.participantPhone,
                        status: this.status,
                        avatar: this.selectedImageUrl,
                    });
                    this.$emit('participant-registered');
                    this.$router.push('/participants');
                } catch (error) {
                    console.error("Erro ao atualizar participante: ", error);
                }
            }
        },
        async getParticipantById(id) {
            try {
                const participantRef = doc(db, 'participants', id);
                const participantSnap = await getDoc(participantRef);
                if (participantSnap.exists()) {
                    const participant = participantSnap.data();
                    this.participantName = participant.nome;
                    this.participantEmail = participant.email;
                    this.participantPhone = participant.telefone;
                    this.status = participant.status;
                    this.selectedImageUrl = participant.avatar || '';
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Erro ao buscar participante: ", error);
            }
        },
        verifyPageId() {
            if (this.$route.params.id) {
                this.pageId = this.$route.params.id;
            }
        },
        goBack() {
            this.$router.push('/participants');
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.selectedImageUrl = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
    }
}
</script>
