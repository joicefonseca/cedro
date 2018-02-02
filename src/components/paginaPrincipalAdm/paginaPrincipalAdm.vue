<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed app>
        <v-list>
            <v-btn block large color="secundary" @click="cadastrar()">Cadastrar</v-btn>
            <v-btn block large color="secundary" @click="produtoscadastrados()">Produtos Cadastrados</v-btn>
            <v-btn block large color="error" @click="sair()">Sair</v-btn>
        </v-list>
        </v-navigation-drawer>
        <v-toolbar
        app
        :clipped-left="clipped">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<style scoped src="./paginaPrincipalAdm.css"></style>
<script type="text/javascript" src="./paginaPrincipalAdm.js">
