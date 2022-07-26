<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" class="mt-5">
        <v-col cols="12" md="4" lg="4" class="text-center mt-7">
          <h1 class="text-center mt-10">Buscar CEP</h1>
          <form class="mb-5">
            <v-text-field
              class="mt-8"
              v-model="cep"
              :error-messages="nameErrors"
              :counter="8"
              label="CEP"
              required
              placeholder="Pesquisar CEP"
              @input="$v.cep.$touch()"
              @blur="$v.cep.$touch()"
            ></v-text-field>
            <v-btn class="mr-4" color="primary" @click="pesquisar">
              Pesquisar
            </v-btn>
            <v-btn @click="limpar"> Limpar </v-btn>
          </form>
          <v-row>
            <v-col v-for="(cep, i) in cepList" :key="i" cols="12" md="3">
              <!--Enviando a variavel book, para o BookItem para da inicio as funcionalidades externas-->
              <!-- <ListaCep class="mt-5 text-left" :cep="cep" /> -->
             {{cep}}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import ListaCep from "@/components/cep/ListaCep.vue";

import api from '@/api/api.js';

export default {
  name: "CepPage",
  // components: { ListaCep },
  mixins: [api],
  data() {
    return {
      cep: "",
      cepList: [] 
    };
  },
  methods: {
    pesquisar(){
      if(this.cep){
        this.get(`/ws/${this.cep}/json/`).then((resposta) =>{
          
          console.log(this.cepList = resposta.data)
        })
      }
    }
  }
};
</script>

<style scoped>
</style>
