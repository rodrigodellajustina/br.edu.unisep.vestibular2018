const const_url      = "http://localhost:5984"
const const_colecao  = "alunovestibular"
var i=0;

function f_create_candidato(){

    //função responsável por cadastrar candidato ao vestibular.

    alert("Função para armazenar o candidato do vestibular");

    // atribuindo valores as variáveis
    cNomeCompletoCandidato = document.getElementById("candidato_nome").value;
    cCPFCandidato          = document.getElementById("candidato_cpf").value;
    cCidadeCandidato       = document.getElementById("candidato_cidade").value;
    cDataNascimento        = document.getElementById("candidato_nascimento").value;

    //Código 01
    //Esse código pode ser removido, apenas para mostrar a comunicação entre front
    //e back-end
    alert("Nome Informado ("+cNomeCompletoCandidato+")");
    alert("CPF Informado ("+cCPFCandidato+")");
    alert("Cidade Informada ("+cCidadeCandidato+")");
    alert("Data Nascimento Informada ("+cDataNascimento+")");

    //Código 02
    //Desenvolver Código para armazenar usando REST no CouchDB.
    //Desenvolver aqui o código para avaliação.




    //Se tudo ocorrer ok exibir a seguinte mensagem
    alert("Candidato registrado com sucesso");
    
    //limpa os campos
    document.getElementById("candidato_nome").value = "";
    document.getElementById("candidato_sobrenome").value = "";
    document.getElementById("candidato_cpf").value = "";
    document.getElementById("candidato_nascimento").value = "1999-01-01";
}

function f_procurar_candidato(){
    //função responsável por encontrar o candidato no banco e inserir na GRID.
    
    alert("Função para pesquisar o candidato");
    
    //variável para formação do JSON de procura  
    cPesquisaCandidato = document.getElementById("candidato_procura").value;

    //exibir o valor enviado por parâmetro
    alert("Parametro enviado do HTML ("+cPesquisaCandidato+")");

    //deverá ser implementado a pesquisa e inclusão dos campos na GRID como no exemplo
    //EXEMPLO
    $('#addr'+i).html("<td><input name='cpf"+i+"' type='text' placeholder='cpf'  value='"+"TESTE TESTE"+"'     class='form-control input-md' readonly/> </td>" + 
                      "<td><input name='nome"  +i+"' type='text' placeholder='nome' value='"+"TESTE TESTE"+"' class='form-control input-md' readonly></td> " +
                      "<td><input name='cidade"  +i+"' type='text' placeholder='cidade' value='"+"TESTE TESTE"+"' class='form-control input-md' readonly></td> " + 
                      "<td><input name='nascimento"  +i+"' type='text' placeholder='nascimento' value='"+"TESTE TESTE"+"' class='form-control input-md' readonly></td> ");
    
    $('#tab_alunos').append('<tr id="addr'+(i+1)+'"></tr>');
    i++;


    //Limpa os Campos
    document.getElementById("candidato_procura").value = "";
}


function f_inscrever_vestibular(){
    //função responsável por inscrever candidato no vestibular relacionando
    //com os cursos de opção do candidato
    
    alert("Função para inscrever o candidato nos cursos que irá prestar vestibular");

    //pegar o CPF do candidato que está na GRID e atualiza as opções de curso 
    //para esse candidato
    
    //captura as opções de curso
    var radioOpcCurso1 = document.getElementsByName("opccurso1");
    for(var i = 0; i < radioOpcCurso1.length; i++){
      if(radioOpcCurso1[i].checked){
          //exibe a opção 1 selecionada
          switch(i) {
            case 0:
                alert("Opção 1 Selecionada Sistemas de Informação");
                break;
            case 1:
                alert("Opção 1 Selecionada Administração");
                break;
            case 2:
                alert("Opção 1 Selecionada Ciências Contábeis");
                break;                
            case 3:
                alert("Opção 1 Selecionada Fisioterapia");
                break;                                
            case 4:
                alert("Opção 1 Selecionada Odontologia");
                break;                                
            case 5:
                alert("Opção 1 Selecionada Engenharia Civil");
                break;                                                                
            case 6:
                alert("Opção 1 Selecionada Engenharia Elétrica");
                break;                                                     
            default:
            alert("Opção NÃO Selecionada ");
        }


      }
    }


    var radioOpcCurso2 = document.getElementsByName("opccurso2");
    for(var i = 0; i < radioOpcCurso2.length; i++){
      if(radioOpcCurso2[i].checked){
          //exibe a opção 1 selecionada
          switch(i) {
            case 0:
                alert("Opção 2 Selecionada Sistemas de Informação");
                break;
            case 1:
                alert("Opção 2 Selecionada Administração");
                break;
            case 2:
                alert("Opção 2 Selecionada Ciências Contábeis");
                break;                
            case 3:
                alert("Opção 2 Selecionada Fisioterapia");
                break;                                
            case 4:
                alert("Opção 2 Selecionada Odontologia");
                break;                                
            case 5:
                alert("Opção 2 Selecionada Engenharia Civil");
                break;                                                                
            case 6:
                alert("Opção 2 Selecionada Engenharia Elétrica");
                break;                                                     
            default:
            alert("Opção NÃO Selecionada ");
        }




      }
    }


    // Implementar aqui o opção de relacionar ao curso com o candidato
   

    
}


function f_listar_candidatos(){

    alert("Acessou a função de listar candidatos");

    // Função responsável ler todos os candidatos que já possuem cadastro

      //EXEMPLO
      $('#addr'+i).html("<td><input name='cpf"+i+"' type='text' placeholder='cpf'  value='"+"399948884883"+"'     class='form-control input-md' readonly/> </td>" + 
      "<td><input name='nome"  +i+"' type='text' placeholder='nome' value='"+"CANDIDATO EXEMPLO"+"' class='form-control input-md' readonly></td> " +
      "<td><input name='opcaocurso1"  +i+"' type='text' placeholder='opcaocurso1' value='"+"SISTEMAS DE INFORMAÇÃO"+"' class='form-control input-md' readonly></td> " + 
      "<td><input name='opcaocurso2"  +i+"' type='text' placeholder='opcaocurso2' value='"+"ADMINISTRAÇÃO"+"' class='form-control input-md' readonly></td> ");

      $('#tab_alunos').append('<tr id="addr'+(i+1)+'"></tr>');
      i++;

       //EXEMPLO 2
       $('#addr'+i).html("<td><input name='cpf"+i+"' type='text' placeholder='cpf'  value='"+"399948884883"+"'     class='form-control input-md' readonly/> </td>" + 
       "<td><input name='nome"  +i+"' type='text' placeholder='nome' value='"+"CANDIDATO EXEMPLO"+"' class='form-control input-md' readonly></td> " +
       "<td><input name='opcaocurso1"  +i+"' type='text' placeholder='opcaocurso1' value='"+"NÃO INFORMADO"+"' class='form-control input-md' readonly></td> " + 
       "<td><input name='opcaocurso2"  +i+"' type='text' placeholder='opcaocurso2' value='"+"NÃO INFORMADO"+"' class='form-control input-md' readonly></td> ");
 
       $('#tab_alunos').append('<tr id="addr'+(i+1)+'"></tr>');
       i++;
 


}