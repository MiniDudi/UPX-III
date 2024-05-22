
<template>
    <v-dialog max-width="500" v-model="isActive">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="mr-10 mt-15" v-bind="activatorProps" text elevation="0" color="#FFC641" @click="openModal('create')">Adicionar Doação</v-btn>
      </template>
  
      <v-card>
        <v-card-title>
          <span>{{ mode === 'edit' ? 'Editar Doação' : 'Adicionar Doação' }}</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="handleSubmit">
            <v-text-field v-model="description" label="Descrição" required></v-text-field>
            <v-text-field v-model="quantity" label="Quantidade" type="number" required></v-text-field>
            <v-select v-model="condition" :items="conditions" label="Condição" required></v-select>
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
    name: 'DonationModal',
    props: {
      donationData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        isActive: false,
        mode: 'create',
        description: '',
        quantity: '',
        condition: '',
        conditions: ['Novo', 'Usado', 'Danificado'],
        valid: false,
      };
    },
    methods: {
      openModal(mode, donation = {}) {
        this.mode = mode;
        if (mode === 'edit' || mode === 'delete') {
          this.description = donation.description;
          this.quantity = donation.quantity;
          this.condition = donation.condition;
        } else {
          this.description = '';
          this.quantity = '';
          this.condition = '';
        }
        this.isActive = true;
      },
      closeModal() {
        this.isActive = false;
        this.$refs.form.resetValidation();
        this.description = '';
        this.quantity = '';
        this.condition = '';
      },
      handleSubmit() {
        if (this.mode === 'create') {
          this.createDonation();
        } else if (this.mode === 'edit') {
          this.updateDonation();
        }
      },
      async updateDonation() {
        if (this.$refs.form.validate()) {
          try {
            const donationRef = doc(db, 'donations', this.donationData.id);
            await updateDoc(donationRef, {
              description: this.description,
              quantity: this.quantity,
              condition: this.condition
            });
            this.$emit('donation-registered');
            this.closeModal();
          } catch (error) {
            console.error("Erro ao atualizar doação: ", error);
          }
        }
      },
      async confirmDelete() {
        try {
          const donationRef = doc(db, 'donations', this.donationData.id);
          await deleteDoc(donationRef);
          this.$emit('donation-registered');
          this.closeModal();
        } catch (error) {
          console.error("Erro ao excluir doação: ", error);
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
  