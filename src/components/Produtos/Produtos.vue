<template>
  <v-container grid-list-md fluid>
  <v-layout row wrap>
    <v-flex xs6 v-for="item in produtos" :key= "item.id">
      <v-card>
        <v-card-media src="static/pc1.jpg" height="250px" width="200px">
        </v-card-media>
        <v-card-title primary-title>
         <h1 class="headline mb-0">{{item.nome}} </h1>
        </v-card-title>
        <v-card-text>
          <div>
            <div>{{item.descricao}}</div>
            <div><b>R${{item.preco}}</b></div>
          </div>
        </v-card-text>
        <v-card-actions xs6>
          <v-btn flat color="pink">Mais Informações</v-btn>
          <v-btn flat color="pink">Comprar</v-btn>
          <v-btn flat color="pink">Editar</v-btn>
          <v-btn flat color="pink">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Produtos.css"></style>
<script type="text/javascript" src="./Produtos.js">