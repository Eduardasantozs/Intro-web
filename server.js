document.addEventListener("DOMContentLoaded", function () {
  const projetos = [
    {
      titulo: "Projeto 1",
      descricao: "Imagens feitas através do photoshop e illustrador",
      imagem: "https://images.app.goo.gl/f9gUsY2dTUrm55Nh7",
      imagem: "https://images.app.goo.gl/mXHn3fyjs64v2Fnb8"
    },
    {
      titulo: "projeto 2 ",
      descricao: "Jogo criado com html, css e javascript",
      imagem: "https://images.app.goo.gl/ETmW2yDutcoFn9Uy9",
    },
    {
      titulo: "Projeto 3",
      descricao: "Calculadora feita em html, css e javascript",
      imagem: " https://images.app.goo.gl/L3JpXDGVhavAdkXs8",
    }
  ];

  const listarProjetos = document.getElementById("listar-projetos");
  const conteudoExibido = document.getElementById("conteudo-exibido");

  projetos.forEach((projeto) => {
    const button = document.createElement("button");
    button.textContent = projeto.titulo;

    button.addEventListener("click", function () {
      const titulo = document.createElement("h2");
      titulo.textContent = projeto.titulo;

      const descricao = document.createElement("p");
      descricao.textContent = projeto.descricao;

      const imagem = document.createElement("img");
      imagem.setAttribute("src", projeto.imagem);



      conteudoExibido.innerHTML = ''; 
      conteudoExibido.appendChild(titulo);
      conteudoExibido.appendChild(descricao);
      conteudoExibido.appendChild(imagem);


      conteudoExibido.style.display = "block"; });

    listaProjetos.appendChild(button);
  });

   window.onclick = function (event) {
    if (event.target == conteudoExibido) {
      conteudoExibido.style.display = "none";
    }
  };
});