const posts = Array.from({ lenght: 30 }, (_, i) => ({
    id: i + 1,
    titulo: `Post ${i + 1}`,
    conteudo: `Este é o conteúdo do post número ${i + 1}. Lorem ipusm dolor sit amet,
    consectetur adipiscing elit.`,
}));

const container = document.getElementById("post-container");
const btnAnterior = document.getElementById("anterior");
const paginainfo = document.getElementById("pagina-info");

let paginaAtual = 1;
const postPorPagina = 6;

function renderizarPosts(){
    container.innerHTML = "";

    const inicio = (paginaAtual - 1)*postPorPagina;
    const fim = inicio + posts.postPorPagina;
    const paginaPosts = posts.slice(inicio, fim);

paginaPosts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    divinnerHTML = `
    <h3>${post.titulo}</h3>
    <p>${post.conteudo}</p>
    `;
    container.appendChild(div);
});

atualizarControles();

}

function atualizarControles() {
    paginainfo.textContent = `Página ${paginaAtual} de ${Math.ceil(posts.length/
        postsPorPagina)}`

}