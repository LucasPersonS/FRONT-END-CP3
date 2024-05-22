let listaUsuarios = [
    {txtNm : "Jeferso", txtCpf : "1234567890", rdGen: "m", txtEmail:"jeferson@email.com", txtSenha:"123456"},
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