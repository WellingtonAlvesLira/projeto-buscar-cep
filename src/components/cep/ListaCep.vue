<template>
  <div>
    <p>CEP: {{cepResult.cep}}</p>
    <p>UF: {{cepResult.uf}}</p>
    <p>CIDADE: {{cepResult.localidade}} </p>
    <p>BAIRRO: {{cepResult.bairro}} </p>
    <p>ENDEREÇO: {{cepResult.logradouro}}</p>
  </div>
</template>

<script>
export default {
    name: 'ListCep',
      props: ['cepResult'],

}
</script>

<style scoped>
p{
    color: black;
    font-weight: bold;
}
</style>