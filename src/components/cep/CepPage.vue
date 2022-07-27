<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" class="mt-5">
        <v-col cols="12" md="4" lg="4" class="text-center mt-7">
          <h1 class="text-center mt-10">Buscar CEP</h1>
          <form class="mb-5">
            <v-text-field
              class="mt-8"
              v-model="cepInput"
              :counter="8"
              label="CEP"
              placeholder="Pesquisar CEP"
            ></v-text-field>
            <v-btn class="mr-4" color="primary" @click="pesquisar">
              Pesquisar
            </v-btn>
            <v-btn @click="limpar"> Limpar </v-btn>
          </form>
          <v-row>
            <v-col cols="12" md="8">
              <!-- Enviando a variavel book, para o ListaCep para da inicio as funcionalidades externas-->
              <ListaCep class="mt-5 text-left" :cepResult="cepResult"></ListaCep>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ListaCep from "@/components/cep/ListaCep.vue";

import api from '@/api/api.js';

export default {
  name: "CepPage",
  components: { ListaCep },
  mixins: [api],
  data() {
    return {
      cepInput: "",
      cepResult: "",
    };
  },
  methods: {
    pesquisar(){
      if(this.cepInput){
        this.get(`/ws/${this.cepInput}/json/`).then((resposta) =>{
          
        this.cepResult = resposta.data;
        
        })
      }
      
    },
    limpar(){
      this.cepInput = "";
    }
  }
};
</script>

<style scoped>
</style>
