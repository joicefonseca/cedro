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
        this.$router.push('/produtosCliente')
      },
      sair(){
        this.$router.push('/')
        location.reload()
      }
    }
  }