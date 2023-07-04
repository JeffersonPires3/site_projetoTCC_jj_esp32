// Função para rolar suavemente até a seção alvo quando um link é clicado
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

// Event listeners para os links do menu de navegação
const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
  });
});

// Event listener para o formulário de contato
const contactForm = document.querySelector('#contato form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  // Aqui você pode adicionar o código para processar o envio do formulário
  // por exemplo, usando AJAX para enviar os dados para um servidor
  // ou exibindo uma mensagem de sucesso ao enviar o formulário
});
