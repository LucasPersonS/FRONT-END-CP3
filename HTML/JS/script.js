let listaUsuarios = [
    {txtNm : "Jeferso", txtCpf : "123456789", rdGen: "m", txtEmail:"jeferso@email.com", txtSenha:"123456"},
];

if(localStorage.getItem("base-dados") == null) {
    localStorage.setItem("base-dados", JSON.stringify(listaUsuarios));
}


let iconEye = document.querySelector(".fa-eye-slash, fa-eye");
iconEye.addEventListener('click', function(){
    
    let inputSenha = document.querySelector("#idSenha");

    if(this.className == "fa-regular fa-eye-slash" ){
        this.setAttribute("class","fa-regular fa-eye");
        inputSenha.setAttribute("type","text");
    }else{
        this.setAttribute("class","fa-regular fa-eye-slash");
        inputSenha.setAttribute("type","password");
    }
});

function validaCampos(input1,input2) {

    const listaUsuarios = JSON.parse(localStorage.getItem("base-dados"))
    console.log(listaUsuarios);
   
    const elMsg = document.querySelector(".valida");
    
    for (let x = 0; x < listaUsuarios.length; x++) {
        if((listaUsuarios[x].txtEmail == input1.value) && (listaUsuarios[x].txtSenha == input2.value)){

            //Criando um objeto no localStorage
            localStorage.setItem("usuario-logado", JSON.stringify(listaUsuarios[x]));

            const userToken = Math.random().toString(16).substring(2, 5)+Math.random().toString(16).substring(2, 5);

            sessionStorage.setItem("token", userToken);
           //Atribuir uma nova classe ao elemento de msg do usuario. 
           elMsg.setAttribute("class","sucesso");
           elMsg.innerText = "Login realizado com SUCESSSO!";

           setTimeout(()=>{
                elMsg.setAttribute("class","valida");
                elMsg.innerText = "logado";
                window.location.href = "index.html";
           },3000);
            return false; 
        }
    }

    elMsg.setAttribute("class","erro");
    elMsg.innerText = "Nome de usuário ou senha incorretos!";
   
    return false;
}


//Recuperando o botão de login
const btnLogin = document.querySelector("#login");
//Recuperando o elemento dialog
 const modal = document.querySelector("dialog");
 //Atrelando um evento ao botão
 btnLogin.addEventListener("click", function(e){

    // console.log(e.target.innerText);
    modal.showModal();
     
 });

 //Recuperando o botão de login
const btnClose = document.querySelector("#close");
 //Atrelando um evento ao botão
btnClose.addEventListener("click", function(e){
    modal.close();
 });