/*A função msg foi criada para receber as informações dos inputs da página e realizar a verificação se os inputs estão vazios, no caso da condicional ser true, ele retorna uma mensagem de erro, do contrário, exibe um recado ao usuário.
*/
function msg(){

    let nome = document.getElementsByName("nome")[0].value;
    let email = document.getElementsByName("email")[0].value;
    if (nome === ""|| email ===""){
        alert("Dados inválidos, tente novamente")
    }else{
        alert("Tudo certo "+nome+", sua mensagem foi recebida e você terá um retorno no email: "+email+" assim que possível")
    }
}

    

