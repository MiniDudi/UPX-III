<template>
    <v-dialog max-width="500" v-model="isActive">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="mr-10 mt-15" v-bind="activatorProps" text elevation="0" color="#FFC641" @click="openModal('create')">Adicionar Participante</v-btn>
      </template>
  
      <v-card>
        <v-card-title>
          <span>{{ mode === 'edit' ? 'Editar Participante' : 'Adicionar Participante' }}</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="handleSubmit">
            <v-text-field v-model="nome" label="Nome" required></v-text-field>
            <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="telefone" label="Telefone" required></v-text-field>
            <v-select v-model="status" label="Status" :items="statuss" required></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeModal">Cancelar</v-btn>
          <v-btn text @click="handleSubmit">{{ mode === 'create' ? 'Cadastrar' : 'Salvar' }}</v-btn>
          <v-btn text v-if="mode === 'delete'" @click="confirmDelete">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { db } from '../firebase/index';
  import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
  
  export default {
    name: 'ParticipantModal',
    props: {
      participantData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        isActive: false,
        mode: 'create',
        nome: '',
        email: '',
        telefone: '',
        status: '',
        statuss: ['Doador', 'Receptor'],
        valid: false,
      };
    },
    methods: {
      openModal(mode, participant = {}) {
        this.mode = mode;
        if (mode === 'edit' || mode === 'delete') {
          this.nome = participant.nome || '';
          this.email = participant.email || '';
          this.telefone = participant.telefone || '';
          this.status = participant.status || '';
        } else {
          this.nome = '';
          this.email = '';
          this.telefone = '';
          this.status = '';
        }
        this.isActive = true;
      },
      closeModal() {
        this.isActive = false;
        this.$refs.form.resetValidation();
        this.nome = '';
        this.email = '';
        this.telefone = '';
        this.status = '';
      },
      handleSubmit() {
        if (this.mode === 'create') {
          this.createParticipant();
        } else if (this.mode === 'edit') {
          this.updateParticipant();
        }
      },
      async createParticipant() {
        if (this.$refs.form.validate()) {
          try {
            const participant = {
              nome: this.nome,
              email: this.email,
              telefone: this.telefone,
              status: this.status
            };
            await addDoc(collection(db, 'participants'), participant);
            this.$emit('participant-registered');
            this.closeModal();
          } catch (error) {
            console.error("Erro ao cadastrar participante: ", error);
          }
        }
      },
      async updateParticipant() {
        if (this.$refs.form.validate()) {
          try {
            const participantRef = doc(db, 'participants', this.participantData.id);
            await updateDoc(participantRef, {
              nome: this.nome,
              email: this.email,
              telefone: this.telefone,
              status: this.status
            });
            this.$emit('participant-registered');
            this.closeModal();
          } catch (error) {
            console.error("Erro ao atualizar participante: ", error);
          }
        }
      },
      async confirmDelete() {
        try {
          const participantRef = doc(db, 'participants', this.participantData.id);
          await deleteDoc(participantRef);
          this.$emit('participant-registered');
          this.closeModal();
        } catch (error) {
          console.error("Erro ao excluir participante: ", error);
        }
      }
    }
  }
  </script>
  
  
  <style scoped>
  .headline {
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    font-weight: 500;
  }
  </style>
  