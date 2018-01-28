export default {
    data(){
        return {
            produtos:[ 
                {
                    id: 1, 
                    nome: "computador1",
                    descricao: {
                        memoria: "4GB",
                        processador: "core i3",
                        hd: "500",
                    },
                    resumo: "Este computador é muito bom!",
                    valor: "100",

                },
                {   
                    id: 2,
                    nome: "computador2",
                    descricao: {
                        memoria: "8GB",
                        processador: "core i7",
                        hd: "500",
                    },
                    resumo: "Este computador é otimo!",
                    valor: "500",
                },
                {   
                    id: 3,
                    nome: "computador3",
                    descricao: {
                        memoria: "2GB",
                        processador: "core i5",
                        hd: "1000",
                    },
                    resumo: "Este computador é maravilhoso!",
                    valor: "200",
                }
            ]
        }
    }, 
    methods: {
        cadastrarProdutos(){
            this.$router.push("/cadastro")
        },
    }
}