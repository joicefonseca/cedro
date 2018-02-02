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
    
    mounted(){
        console.log(firebase.auth().email)

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
            var parcela1xsemDividir=this.parcela1x
            this.parcela1x= parseFloat(this.parcela1x).toFixed(2)

            var juros2=  Number(parcela1xsemDividir) *0.02
            this.parcela2x= Number(parcela1xsemDividir)+juros2
            var parcela2xsemdividir= this.parcela2x
            this.parcela2x= this.parcela2x/2
            this.parcela2x= parseFloat(this.parcela2x).toFixed(2)

            var juros3=  Number(parcela2xsemdividir) *0.02
            this.parcela3x=  Number(parcela2xsemdividir)+juros3
            var parcela3xsemdividir= this.parcela3x
            this.parcela3x= this.parcela3x/3
            this.parcela3x= parseFloat(this.parcela3x).toFixed(2)

            var juros4=  Number(parcela3xsemdividir)*0.02
            this.parcela4x=  Number(parcela3xsemdividir)+juros4
            var parcela4xsemdividir= this.parcela4x
            this.parcela4x= this.parcela4x/4
            this.parcela4x= parseFloat(this.parcela4x).toFixed(2)

            var juros5=  Number(parcela3xsemdividir) *0.02
            this.parcela5x=  Number(parcela3xsemdividir)+juros5
            this.parcela5x= this.parcela5x/5
            this.parcela5x= parseFloat(this.parcela5x).toFixed(2)

            console.log(this.parcela1x)
            this.parcelas= [
                '1 x ' + 'R$'+ this.parcela1x, 
                '2 x ' + 'R$' + this.parcela2x,
                '3 x ' + 'R$' + this.parcela3x, 
                '4 x ' + 'R$' + this.parcela4x, 
                '5 x ' + 'R$' + this.parcela5x
                ]
            
            
        }


        

    }
}