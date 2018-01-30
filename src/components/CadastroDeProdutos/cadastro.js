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
                nome: "",
                descricao: "",
                preco: "",
                dadostecnicos: "", 
            },
            alertSucesso: false,
            alertErro: false,
        }
    }, 
    mounted(){
        console.log(this.produtos)
    },
    methods: {
        criarProduto(){
            this.alertSucesso= false
            this.alertErro= false
            tabelaProdutos.push(this.dados).then((resultado)=>{
                this.alertSucesso= true
                this.alertErro= false
            }).catch((resultado)=>{
                this.alertSucesso= false
                this.alertErro= true
            })


        }
    }
}