import React from "react";

export default function LupaAnimes() {
  const AcessoLogin = "LOGIN";
  const AcessoRegistre = "REGISTRE";
  const TituloName = "TODOS ANIMES!";

  

  return (
    <div className="LupaAnimes">
      <header>
        <nav className="Barra-de-navegaçao">
          <div className="Icone-lupa">
            <div className="Icone-Centro"></div>
            <div className="Icone-perna"></div>
          </div>
          <div>
            <input className="Input" placeholder="Pesquise"></input>
            <div></div>
          </div>
          <button className="Mode-Dark"><i class="fa-solid fa-moon"></i></button>
          <ul className="Login-Registre">
            <li>
              <a href="">{AcessoLogin}</a>
            </li>
            <li className="Resgistre">
              <a href="">{AcessoRegistre}</a>
            </li>
          </ul>
        </nav>
        <h1 id="SEJA-BEM-VINDO">{TituloName}</h1>
        <h1 id="Gratis">GRATIS</h1>
      </header>
      <main className="Animes-Class">
        <div className="Cardes-1">
        <h1>ANIMES EM ALTA</h1>
          <button className=""></button>
          <div id="Cardes"></div>
          <div id="Cardes"></div>
          <div id="Cardes"></div>
          <div id="Cardes"></div>
          <button className="Next-Animes"></button>
        </div>
        <div className="Cardes-2">
        <h1>ANIMES SHONENS</h1> 
          <button className=""></button>
          <div id="Cardes"></div>
          <div id="Cardes"></div>
          <div id="Cardes"></div>
          <div id="Cardes"></div>
          <button className="Next-Animes"></button>
        </div>
      </main>
    </div>
  );
}
