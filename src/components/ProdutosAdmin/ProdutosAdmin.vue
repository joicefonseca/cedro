<template>
  <v-container grid-list-md fluid>
  <v-layout row wrap>
    <v-flex xs6 v-for="item in produtos" :key="item['.key']">
      <v-card>
        <v-card-media src="static/pc1.jpg" height="250px" width="200px">
        </v-card-media>
        <v-card-title primary-title>
         <h1 class="headline mb-0">{{item.nome}} </h1>
        </v-card-title>
        <v-card-text>
          <div>
            <div>{{item.descricao}}</div>
            <div><b>R${{item.preco}}</b></div>
          </div>
        </v-card-text>
        <v-card-actions xs6>
          <v-btn flat color="pink" @click="detalhesProduto(item)">Mais Informações</v-btn>
          <v-btn flat color="pink" @click="comprarProduto(item.preco)">Comprar</v-btn>
          <v-btn flat color="pink" @click="excluirProduto(item['.key'])">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-dialog v-model="detalhesProdutos" width="50%">
        <v-card>
          <v-card-text>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-and flex-box>
                  <p>
                    <b>Nome: </b>{{valoresDetalhesProdutos.nome}}
                  </p>
                  <p>
                    <b>Preço: R$</b>{{valoresDetalhesProdutos.preco}}
                  </p>
                  <p>
                    <b>Detalhes: </b>{{valoresDetalhesProdutos.descricao}}
                  </p>
                  <p>
                    <b>Dados Técnicos: </b>{{valoresDetalhesProdutos.dadostecnicos}}
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn @click.stop="detalhesProdutos=false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="formaCompra" width="50%">
        <v-card>
          <v-card-text>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-and flex-box>
                  <v-radio-group v-model="pagamento1" row>
                    <v-radio label="Dinheiro" value="dinheiro"></v-radio>
                    <v-radio label="Cartão" value="cartao"></v-radio>
                  </v-radio-group>
                  <v-radio-group v-model="pagamento2" row v-if="pagamento1=='cartao'">
                    <v-radio label="À vista" value="avista"></v-radio>
                    <v-radio label="À prazo" value="aprazo"></v-radio>
                  </v-radio-group>
                  <v-select :items="parcelas" v-model="pagamento3" row v-if="pagamento2=='aprazo'&& pagamento1=='cartao'"></v-select>
                  <div v-if="pagamento2=='avista'&& pagamento1=='cartao'">
                    <p>
                      R$ {{valorProduto}}
                    </p>
                  </div>
                  <div v-if="pagamento1=='dinheiro'">
                    <p>
                      R$ {{valorProduto-(valorProduto*0.1)}}
                    </p>
                  </div>
                  <div>
                    
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" block @click.stop="formaCompra=false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      
  </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./ProdutosAdmin.css"></style>
<script type="text/javascript" src="./ProdutosAdmin.js">