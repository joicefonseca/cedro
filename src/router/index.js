import Vue from 'vue'
import Router from 'vue-router'
import Produtos from '@/components/Produtos/Produtos.vue'
import cadastro from '@/components/CadastroDeProdutos/cadastro.vue'
import ('vuetify/dist/vuetify.min.css')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: cadastro
    }
  ]
})
