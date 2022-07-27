<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" class="mt-5">
        <v-col cols="12" md="4" lg="4" class="text-center mt-7">
          <v-alert shaped outlined type="success" v-model="verificadorInputSucess">
            {{msgVerificadorInputSucess}}
            <v-btn text color="green" @click="verificadorInputSucess = false">
              Fechar
            </v-btn>
          </v-alert>
          <h1 class="text-center mt-10">Buscar CEP</h1>
          <form class="mb-5">
            <v-text-field
              class="mt-8"
              v-model="cepInput"
              :counter="8"
              label="CEP"
              placeholder="Pesquisar CEP"
            ></v-text-field>
            <v-alert dense outlined type="error" v-model="verificadorInput">
              {{ msgVerificadorInput }}
              <v-btn text @click="verificadorInput = false"> Fechar </v-btn>
            </v-alert>
            <v-btn class="mr-4" color="primary" @click="pesquisar">
              Pesquisar
            </v-btn>
            <v-btn @click="limpar"> Limpar </v-btn>
          </form>
          <v-row>
            <v-col cols="12" md="8">
              <!-- Enviando a variavel book, para o ListaCep para da inicio as funcionalidades externas-->
              <ListaCep
                class="mt-5 text-left"
                :cepResult="cepResult"
              ></ListaCep>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ListaCep from "@/components/cep/ListaCep.vue";

import api from "@/api/api.js";

export default {
  name: "CepPage",
  components: { ListaCep },
  mixins: [api],
  data() {
    return {
      verificadorInput: false,
      verificadorInputSucess: false,
      msgVerificadorInput: "",
      msgVerificadorInputSucess: "",
      cepInput: "",
      cepResult: "",
      maxInput: 8,
    };
  },
  methods: {
    pesquisar() {
      if (this.cepInput) {
        this.get(`/ws/${this.cepInput}/json/`).then((resposta) => {
          this.cepResult = resposta.data;
          this.msgVerificadorInputSucess = "Busca realizada com sucesso!"
          this.verificadorInputSucess = true;
        });
        if (
          this.cepInput.length < this.maxInput ||
          this.cepInput.length > this.maxInput
        ) {
          this.msgVerificadorInput = "Digite apenas 8 números";
          this.verificadorInput = true;
        }
      } else {
        this.msgVerificadorInput = "Campo em branco. Insira um cep válido!";
        this.verificadorInput = true;
      }
    },
    limpar() {
      this.cepInput = "",
      this.cepResult = ""
    },
  },
};
</script>

<style scoped>
</style>
