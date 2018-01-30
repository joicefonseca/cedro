<template>
  <v-container fluid>
  <template>
  <v-form ref= "form" lazy-validation>
    <v-layout row>
     <input value="upload" type="file" accept=".jpg, .png" @change="uploadFoto(file, $event)" >
    </v-layout>

    <v-layout row>
    <v-text-field
      label="Nome"
      v-model="dados.nome"
      required
    ></v-text-field>
    </v-layout>

    <v-layout row>
    <v-text-field
      label="Preço"
      v-model="dados.preco"
      required
    ></v-text-field>
    </v-layout>
    
    <v-layout row>
    <v-text-field
      label="Descrição:"
      v-model="dados.descricao"
      required
    ></v-text-field>
    </v-layout>

    <v-layout row>
    <v-text-field
      label="Dados Tecnicos:"
      v-model="dados.dadostecnicos"
      required
    ></v-text-field>
    </v-layout>
      <v-alert color="success" icon="check_circle" :value="alertSucesso" transition="scale-transition">
          Cadastro efetuado com sucesso!
      </v-alert>
      <v-alert color="error" icon="warning" :value="alertErro" transition="scale-transition">
          Cadastro não efetuado!
      </v-alert>
    <v-btn @click="criarProduto()">
     {{submit}}
    </v-btn>
 </v-form>
</template>  
  
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script type="text/javascript" src="./cadastro.js">
  
</script>
<style scoped src="./cadastro.css"></style>
