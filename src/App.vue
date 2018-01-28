<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-btn block large color="secundary" @click="cadastrar()">Cadastrar</v-btn>
        <v-btn block large color="secundary" @click="produtoscadastrados()">Produtos Cadastrados</v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
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

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Monitores'
      },
      {
        icon: 'bubble_chart',
        title: 'Teclados'
      },
      {
        icon: 'bubble_chart',
        title: 'Mouse'
      },
      {
        icon: 'bubble_chart',
        title: 'Fones de Ouvido'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App', 
  methods: {
    cadastrar(){
     this.$router.push('/cadastro')
    },
    produtoscadastrados(){
      this.$router.push('/')
    }
  }
}

</script>
