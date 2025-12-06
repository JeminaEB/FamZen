import React, { useState } from "react";
import "./Header.css";

// Si sólo tienes el @2x, úsalo en ambos:
import FamZenLogo from "../../assets/images/famzen-logo@2x.png";

const Header: React.FC = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto((v) => !v);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="fz-header">
      <div className="fz-header-inner">
        {/* Burger (móvil) */}
        <button
          className="fz-burger"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-controls="main-nav"
          aria-expanded={menuAbierto}
          onClick={toggleMenu}
        >
          <span className="fz-burger-line" />
          <span className="fz-burger-line" />
          <span className="fz-burger-line" />
        </button>

        {/* Marca (NO clickable) */}
        <div className="fz-logo-area" aria-label="FamZen">
          <img
            className="fz-logo-img"
            src={FamZenLogo}
            srcSet={`${FamZenLogo} 1x, ${FamZenLogo} 2x`}
            alt="FamZen"
          />
          <span className="fz-logo-text"></span>
        </div>

        {/* Navegación */}
        <nav
          id="main-nav"
          className={`fz-nav ${menuAbierto ? "fz-nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" className="fz-nav-link" onClick={cerrarMenu}>
            Inicio
          </a>
          <a href="#recursos" className="fz-nav-link" onClick={cerrarMenu}>
            Recursos
          </a>
          <a href="#contacto" className="fz-nav-link" onClick={cerrarMenu}>
            Contacto
          </a>
          <a
            href="/login"
            className="fz-login-btn"
            onClick={cerrarMenu}
          >
            Iniciar sesión
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
