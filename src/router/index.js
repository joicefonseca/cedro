import Vue from 'vue'
import Router from 'vue-router'
import ProdutosAdmin from '@/components/ProdutosAdmin/ProdutosAdmin.vue'
import ProdutosCliente from '@/components/ProdutosCliente/ProdutosCliente.vue'
import cadastro from '@/components/CadastroDeProdutos/cadastro.vue'
import ('vuetify/dist/vuetify.min.css')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/produtosAdmin',
      name: 'ProdutosAdmin',
      component: ProdutosAdmin
    },

    {
      path: '/produtosCliente',
      name: 'ProdutosCliente',
      component: ProdutosCliente
    },

    {
      path: '/cadastro',
      name: 'Cadastro',
      component: cadastro
    }
  ]
})
