// main.js - Enlaçados front‑end interactions
// Este centraliza comportamentos de interface comuns em todas as páginas
// como alternar o menu móvel, ajustar o fundo da navbar ao rolar e alternar
// entre formulários de login e registro. Ele é carregado ao final de cada
// página para garantir que o DOM esteja disponível antes de associar
// os ouvintes de eventos.

// Aguarda o carregamento do DOM antes de executar o código para evitar
// tentativas de acesso a elementos ainda não existentes.
document.addEventListener('DOMContentLoaded', () => {
    // Referência ao botão e ao menu de navegação móvel (hamburguer)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // Alterna a classe 'hidden' para mostrar ou ocultar o menu
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Controla a opacidade de fundo da navbar conforme o usuário rola a página
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Torna a navegação completamente opaca ao descer
                navbar.classList.add('bg-bg-dark');
                navbar.classList.remove('bg-bg-dark/90');
            } else {
                // Retorna ao estado semi‑transparente no topo da página
                navbar.classList.remove('bg-bg-dark');
                navbar.classList.add('bg-bg-dark/90');
            }
        });
    }

    // Alternância entre formulários de login e registro na página de login
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    // Verifica se os elementos existem antes de associar os ouvintes,
    // permitindo que este script seja incluído em páginas que não possuem
    // formulários de autenticação sem causar erros.
    if (loginContainer && registerContainer && showRegisterLink && showLoginLink) {
        showRegisterLink.addEventListener('click', () => {
            // Esconde o formulário de login e exibe o de registro
            loginContainer.classList.add('hidden');
            registerContainer.classList.remove('hidden');
        });
        showLoginLink.addEventListener('click', () => {
            // Esconde o formulário de registro e exibe o de login
            registerContainer.classList.add('hidden');
            loginContainer.classList.remove('hidden');
        });
    }
});