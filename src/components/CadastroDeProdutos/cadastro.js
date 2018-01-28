import firebase from "firebase"
import {db} from "../../config.js"
const tabelaProdutos = db.ref ("produtos") 
export default {
    firebase: {
        produtos: tabelaProdutos
    },
    data(){
        return {
            submit : 'Enviar',
            dados:{ 
                imagem: "",
                nome: "",
                descricao: "",
                preco: "",
                dadostecnicos: "",
            } 
           
        }
    }, 
    methods: {
        criarProduto(){
            // var dados={
            //     nome: this.nome,
            //     descricao: this.descricao,
            //     preco: this.preco,
            //     dadostecnicos: this.dadostecnicos
            // }
            // console.log(dados)
            tabelaProdutos.push(this.dados).then((resultado)=>{
                alert("Cadastro realizado com sucesso!")
                console.log(resultado)
            }).catch((resultado)=>{
                alert("Cadastro não enviado!")
                console.log(resultado)
            })


        }
    }
}