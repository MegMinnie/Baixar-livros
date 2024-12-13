import Header from "./componentes/header/header";
import Card from "./componentes/card/card";
import Footer from "./componentes/footer/footer";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpg";
import img13 from "./assets/img13.jpg";
import img14 from "./assets/img14.jpg";
import img15 from "./assets/img15.jpg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="principal">
        <h3>Linux</h3>
        <div className="container">
          <Card
            imagem={img1}
            titulo="Começando com Linux "
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
          />
          <Card
            titulo="Entendendo e Dominando o Linux"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img2}
          />
          <Card
            titulo="Iniciando com Linux: Curso de Ubuntu"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img3}
          />
          <Card
            titulo="Linux: A Bíblia "
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img4}
          />
          <Card
            titulo="Entendendo e Dominando o Linux"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img5}
          />
        </div>
        <h3>Java</h3>
        <div className="container">
          <Card
            imagem={img6}
            titulo="Aplicações Java para a Web  com JDF e JPA"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
          />
          <Card
            titulo="Desbravando Java e Orientação a Objetos"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img7}
          />
          <Card
            titulo="Componentes reutilizáveis em Java"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img8}
          />
          <Card
            titulo="Design Patterns com Java"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img9}
          />
          <Card
            titulo="Explorando APIs e bibliotecas Java"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img10}
          />
        </div>
        <h3>Python</h3>
        <div className="container">
          <Card
            imagem={img11}
            titulo="Automatize tarefas maçantes com python"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
          />
          <Card
            titulo="Curso intensivo de Python"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img12}
          />
          <Card
            titulo="data science do zero - Primeiras regras com o python"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img13}
          />
          <Card
            titulo="Python - Escreva seus primeiros programas"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img14}
          />
          <Card
            titulo="Python para desenvolvedores"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, at laudantium."
            imagem={img15}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
