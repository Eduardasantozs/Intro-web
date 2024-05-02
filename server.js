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
  
    const listaProjetos = document.getElementById("lista-projetos");
    const conteudoExibido = document.getElementById("conteudo-exibido");
    const tituloConteudo = document.getElementById("titulo-conteudo");
    const descricaoConteudo = document.getElementById("descricao-conteudo");
    const imagemConteudo = document.getElementById("imagem-conteudo");
    const observacaoConteudo = document.getElementById("observacao-conteudo");
  
    projetos.forEach((projeto) => {
        const ul = document.createElement("ul");
        const button = document.createElement("button");
        button.textContent = projeto.titulo;
        button.addEventListener("click", function () {
            tituloConteudo.textContent = projeto.titulo;
            descricaoConteudo.textContent = projeto.descricao;
            imagemConteudo.setAttribute("src", projeto.imagem);
            observacaoConteudo.textContent = projeto.descricao;
  
            conteudoExibido.style.display = "block"; 
        });
        ul.appendChild(button);
        listaProjetos.appendChild(ul);
    });
    window.onclick = function (event) {
        if (event.target == conteudoExibido) {
            conteudoExibido.style.display = "none";
        }
    };
  });
  