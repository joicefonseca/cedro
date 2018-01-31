import firebase from "firebase"
import {db} from "../../config.js"
const tabelaProdutos = db.ref ("produtos") 
export default {
    firebase:{
        produtos: tabelaProdutos
    },
    data(){
        return {
            detalhesProdutos: false,
            valoresDetalhesProdutos: {},
            formaCompra: false,
            valorProduto: null,
            pagamento1: "",
            pagamento2: "",
            pagamento3: "",
            parcelas: ['1 x', '2 x', '3 x' , '4 x', '5 x' ],
            parcela1x: 0,
            parcela2x: 0,
            parcela3x: 0,
            parcela4x: 0,
            parcela5x: 0,
            
        }
    },
    watch:{
        pagamento3:function(){
            console.log(this.pagamento3)
            console.log(this.valorProduto)
        }
    },
    methods: {
        cadastrarProdutos(){
            this.$router.push("/cadastro")
        },
        excluirProduto(item){
            tabelaProdutos.child(item).remove()
        },
        detalhesProduto(item){
            console.log(item)
            this.valoresDetalhesProdutos=item
            this.detalhesProdutos= true
        },
        comprarProduto(item){
           
            this.valorProduto= item
            this.formaCompra= true
            Number(item)
            var juros1= Number(item)*0.02
            this.parcela1x= Number(item)+juros1
            console.log(this.parcela1x)
            this.parcelas= ['1 x ' + 'R$'+ this.parcela1x , '2 x', '3 x' , '4 x', '5 x' ]
            
            
        }


        

    }
}