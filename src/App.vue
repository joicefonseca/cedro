<template>
  <v-app>
    <v-layout v-if="loginSucesso==false">
        <v-flex>
          <v-container v-if="cardCadastro== false">
              <v-card id="login">
                <v-card-text>
                  <v-text-field v-model="loginEmail" label="E-mail:"></v-text-field>
                  <v-text-field v-model="loginSenha" label="Senha:" type="password"></v-text-field>
                    <v-alert color="success" icon="check_circle" :value="alertSucesso" transition="scale-transition">
                      Cadastro efetuado com sucesso!
                    </v-alert>
                    <v-alert color="error" icon="warning" :value="alertErro" transition="scale-transition">
                      Cadastro não efetuado!
                    </v-alert>
                </v-card-text>
                <v-container grid-list-md text-xs-center>
                  <v-layout row wrap>
                      <v-flex xs12>
                        <v-btn id="botaoCard" @click="fazerLogin()">Login</v-btn>
                        <v-btn id="botaoCard" @click="mostrarCardCadastro()">Cadastre-se</v-btn>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
          </v-container>

          <v-container v-if="cardCadastro== true">
              <v-card id="login">
                <v-card-text>
                  <v-text-field v-model="cadastroEmail" label="E-mail:"></v-text-field>
                  <v-text-field v-model="cadastroSenha" label="Senha:" type="password" ></v-text-field>
                  <v-text-field v-model="confirmaSenha" label="Confirme sua senha:" type="password"></v-text-field>
                    <v-alert color="success" icon="check_circle" :value="cadastroSucesso" transition="scale-transition">
                      Cadastro efetuado com sucesso!
                    </v-alert>
                    <v-alert color="error" icon="warning" :value="cadastroErro" transition="scale-transition">
                      Cadastro não efetuado!
                    </v-alert>
                </v-card-text>
                <v-container grid-list-md text-xs-center>
                  <v-layout row wrap>
                      <v-flex xs12>
                        <v-btn id="botaoCard" @click="cadastrarUsuario()">Salvar</v-btn>
                        <v-btn id="botaoCard" @click="fecharCardCadastro()">Voltar</v-btn>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
          </v-container>
        </v-flex>
    </v-layout>
    <v-flex v-if="loginSucesso == true">
      <paginaPrincipal></paginaPrincipal>
    </v-flex>
    <img src="./assets/fundo.jpg" id="imagemFundo" v-if="loginSucesso == false">
  </v-app>
</template>

<style scoped>
  #login{
    -webkit-box-shadow:0px 0px 50px 30px #535353 ;
    -moz-box-shadow:0px 0px 50px 30px #535353 ;
    box-shadow:0px 0px 50px 30px #535353 ;
    border-radius: 5%;
    width: 30%;
    margin-left: 25%;
    margin-top: 10%;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.7);
  }
  #botaoCard{
    color: #FFF;
    background-color: #353535
  }
  img{
    width: 100%; heigth: 100%; background-color:#000; margin-top: -2.1%;
  }
</style>


<script>
import paginaPrincipal from './components/paginaPrincipal/paginaPrincipal.vue'
import firebase from 'firebase'
export default {
  components:{paginaPrincipal},
  data(){
    return{
      loginSucesso: false,
      alertErro:false,
      alertSucesso:false,
      loginEmail:'',
      loginSenha:'',
      confirmaSenha: '',
      cadastroSenha: '',
      cadastroLogin: '',
      cadastroSucesso: '',
      cadastroErro: '',
      cardCadastro: false,
    }
  },
  methods: {
    mostrarCardCadastro(){
      this.cardCadastro = true 
    },
    fecharCardCadastro(){
      this.cardCadastro = false 
    },
    cadastrarUsuario(){
      this.cadastroSucesso= false
      this.cadastroErro= false
      if(this.cadastroSenha != this.confirmaSenha){
        this.cadastroSucesso= false
        this.cadastroErro= true
      } else{
         firebase
        .auth()
        .createUserWithEmailAndPassword( this.cadastroEmail, this.cadastroSenha)
        .then((resposta)=> {
            this.cadastroSucesso= true
            this.cadastroErro= false
            console.log(resposta)
        })
        .catch((resposta)=> {
            this.cadastroSucesso= false
            this.cadastroErro= true
            console.log(resposta)
        })
      }
    },
    fazerLogin(){
      this.alertErro= false
      this.alertSucesso= false
      firebase
      .auth()
      .signInWithEmailAndPassword(this.loginEmail, this.loginSenha)
      .then((resposta)=> {
            this.alertSucesso= true
            this.alertErro= false
            console.log(resposta)
            this.loginSucesso= true
        })
        .catch((resposta)=> {
            this.alertSucesso= false
            this.alertErro= true
            console.log(resposta)
        })
    }
  }
}
</script>
