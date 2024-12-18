import "./card.css";

function card({ titulo, descricao, imagem, linkDoLivro }) {
  return (
    <div className="card">
      <img src={imagem} alt="" className="imagem" />
      <h3 className="titulo-card">{titulo}</h3>
      <p className="descricao">{descricao}</p>
      <a href={linkDoLivro} download={titulo}>
        Download
      </a>
    </div>
  );
}

export default card;
