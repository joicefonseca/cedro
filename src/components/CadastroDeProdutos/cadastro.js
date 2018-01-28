export default {
    data(){
        return {
            submit : 'Enviar', 
            imagem: "",
            nome: "",
            descricao: "",
            preco: "",
        }
    }, 
    methods: {
        criarProduto(){
            alert(this.nome)
        }
    }
}