import React from "react";

function Nav() {

  const AcessoLogin = "LOGIN";
  const AcessoRegistre = "REGISTRE";

  return (
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
      <h1>TODOS OS ANIMES</h1>
      <h1>GRATIS</h1>
    </header>
  );
}

export default Nav;
