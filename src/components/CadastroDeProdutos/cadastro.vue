<template>
  <v-container fluid>
  <template>
  <v-form ref= "form" lazy-validation>
    <v-layout row>
      <v-text-field
        label="Imagem"
        v-model="imagem"
        name="input1"
        required
      ></v-text-field>
    </v-layout>

    <v-layout row>
    <v-text-field
      label="Nome"
      v-model="nome"
      name="input2"
      required
    ></v-text-field>
    </v-layout>

    <v-layout row>
    <v-text-field
      label="Descrição"
      v-model="descricao"
      name="input3"
      required
    ></v-text-field>
    </v-layout>

    <v-layout row>
    <v-text-field
      label="Preço"
      v-model="preco"
      name="input4"
      required
    ></v-text-field>
    </v-layout>
    
    <v-btn
      @click="criarProduto()"
    >
     {{submit}}
    </v-btn>
 </v-form>
{{nome}}
</template>  
  
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script type="text/javascript" src="./cadastro.js">
  
</script>
<style scoped src="./cadastro.css"></style>
