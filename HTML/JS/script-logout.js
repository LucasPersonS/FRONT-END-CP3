document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');

    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('token');
        localStorage.removeItem('usuario-logado');
        window.location.href = 'login.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    const userInfo = document.getElementById('info-usuario');

    const userData = {
        nome: 'Jeferso',
        email: 'jeferso@email.com',
        senha: '123456'
    };

    
    userInfo.textContent = `Nome: ${userData.nome} | Email: ${userData.email} | Último login: ${userData.senha}`;

    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('token');
        localStorage.removeItem('usuario-logado');
        window.location.href = 'login.html';
    });
});