import firebase from "firebase"
import {db} from "../../config.js"
const tabelaProdutos = db.ref ("produtos") 
export default {
    firebase:{
        produtos: tabelaProdutos
    },
    data(){
        return {
        }
    },
    methods: {
        cadastrarProdutos(){
            this.$router.push("/cadastro")
        },
    }
}