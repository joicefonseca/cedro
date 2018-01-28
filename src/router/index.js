import Vue from 'vue'
import Router from 'vue-router'
import Produtos from '@/components/Produtos/Produtos.vue'
import cadastro from '@/components/CadastroDeProdutos/cadastro.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
