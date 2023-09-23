import React from "react";

export default function LupaAnimes() {
  const AcessoLogin = "LOGIN";
  const AcessoRegistre = "REGISTRE";
  const TituloName = "SEJA-BEM VINDO !";


  return (
    <div className="LupaAnimes">
      <header>
        <nav className="Barra-de-navegaçao">
          <div>
            <div></div>
          </div>
          <div></div>
          <ul>
            <li className="Login">
              <a href="">{AcessoLogin}</a>
            </li>
            <li className="Resgistre">
              <a href="">{AcessoRegistre}</a>
            </li>
          </ul>
        </nav>
        <h1 id="SEJA-BEM-VINDO">{TituloName}</h1>
        <h1 id="Gratis">LupaAnimes</h1>
      </header>
      <main className="Animes-Class">
        <h1>ANIMES EM ALTA</h1>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
}
