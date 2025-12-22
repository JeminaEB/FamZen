import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

import FamZenLogo from "../../assets/images/famzen-logo@2x.png";

const Header: React.FC = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const headerRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setMenuAbierto((v) => !v);
  const cerrarMenu = () => setMenuAbierto(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isLoginPage = location.pathname === "/login";

  const goToSection = (hash: string) => {
    cerrarMenu();

    if (isLoginPage) {
      navigate("/");
      // Espera un pelín a que Home pinte y luego aplica hash
      setTimeout(() => {
        window.location.hash = hash;
      }, 60);
    } else {
      window.location.hash = hash;
    }
  };

  const handleAuthClick = () => {
    cerrarMenu();

    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  // ✅ Cerrar menú al clicar fuera (solo cuando está abierto)
  useEffect(() => {
    if (!menuAbierto) return;

    const onPointerDown = (ev: PointerEvent) => {
      const el = headerRef.current;
      if (!el) return;

      const target = ev.target as Node;
      if (!el.contains(target)) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [menuAbierto]);

  // ✅ Cerrar menú con ESC (extra pro)
  useEffect(() => {
    if (!menuAbierto) return;

    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setMenuAbierto(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuAbierto]);

  return (
    <header className="fz-header" ref={headerRef}>
      <div className="fz-header-inner">
        {/* Burger (móvil) */}
        <button
          className="fz-burger"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-controls="main-nav"
          aria-expanded={menuAbierto}
          onClick={toggleMenu}
          type="button"
        >
          <span className="fz-burger-line" />
          <span className="fz-burger-line" />
          <span className="fz-burger-line" />
        </button>

        {/* Logo (no clickable) */}
        <div className="fz-logo-area" aria-label="FamZen">
          <img
            className="fz-logo-img"
            src={FamZenLogo}
            srcSet={`${FamZenLogo} 1x, ${FamZenLogo} 2x`}
            alt="FamZen"
          />
        </div>

        {/* Navegación */}
        <nav
          id="main-nav"
          className={`fz-nav ${menuAbierto ? "fz-nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <button
            type="button"
            className="fz-nav-link"
            onClick={() => goToSection("#inicio")}
          >
            Inicio
          </button>

          <button
            type="button"
            className="fz-nav-link"
            onClick={() => goToSection("#recursos")}
          >
            Recursos
          </button>

          <button
            type="button"
            className="fz-nav-link"
            onClick={() => goToSection("#contacto")}
          >
            Contacto
          </button>

          <button
            type="button"
            className="fz-login-btn"
            onClick={handleAuthClick}
          >
            {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
