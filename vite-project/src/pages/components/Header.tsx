import React, { useState } from "react";
import "./Header.css";
import FamZen from "../../assets/images/FamZen.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="brand" aria-label="Inicio">
          <img src={FamZen} alt="FamZen" className="logo" />
          {/* Si tu PNG NO lleva la palabra, descomenta: */}
          {/* <span className="wordmark">FamZen</span> */}
        </a>

        <nav
          id="main-nav"
          aria-label="Navegación principal"
          className={`main-nav ${open ? "open" : ""}`}
        >
          <a href="#">Inicio</a>
          <a href="#">Recursos</a>
          <a href="#">Contacto</a>
        </nav>

        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label="Abrir menú"
          aria-controls="main-nav"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

