import React, { useState } from "react";
import Header from "./Header";
import "./Home.css";

export default function Home() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) =>
    setOpen(open === section ? null : section);

  const sections = [
    {
      title: "Calendario Familiar",
      description:
        "Sincroniza horarios de todos y recibe recordatorios automáticos.",
      className: "pink",
      icon: "📅",
    },
    {
      title: "Asistente de Tareas",
      description:
        "Lista compartida con asignaciones automáticas según el tiempo disponible.",
      className: "yellow",
      icon: "🧹",
    },
    {
      title: "Tiempo Personal",
      description: "Encuentra huecos libres y bloquea momentos de respiro.",
      className: "green",
      icon: "🧘",
    },
    {
      title: "Notas y Documentos",
      description:
        "Guarda recetas, listas de compras y autorizaciones en un solo lugar.",
      className: "blue",
      icon: "📄",
    },
  ];

  return (
    <>
      <Header />

      {/* ID para el enlace "Inicio" del header */}
      <main className="page" id="inicio">
        {/* HERO / TÍTULO */}
        <section className="hero">
          <h2 className="hero-title">
            Tu asistente inteligente para familias ✨
          </h2>
          <p className="hero-subtitle">
            Organiza el día a día, reparte tareas y reserva tiempo para cada
            persona de casa sin perderte nada importante.
          </p>

          <div className="hero-extra">
            <div className="quote">
              <span className="quote-label">Consejo de hoy</span>
              <p className="quote-text">
                Planificad juntos una actividad en familia de 15 minutos sin
                pantallas.
              </p>
            </div>

            <div className="quick-badges">
              <span className="badge">✅ 3 tareas completadas</span>
              <span className="badge">📅 2 eventos hoy</span>
              <span className="badge">🧘 1 rato de tiempo personal</span>
            </div>
          </div>
        </section>

        {/* TARJETAS PRINCIPALES – ID para "Recursos" */}
        <section className="sections-wrapper" id="recursos">
          <div className="sections">
            {sections.map((sec) => (
              <div
                key={sec.title}
                className={`card ${sec.className}`}
                onClick={() => toggle(sec.title)}
              >
                <div className="card-header">
                  <span className="card-icon">{sec.icon}</span>
                  <h3>{sec.title}</h3>
                </div>

                {open === sec.title && <p>{sec.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* RESUMEN RÁPIDO */}
        <section className="summary">
          <h3 className="summary-title">Resumen rápido de hoy</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-label">Próximo evento</span>
              <p className="summary-value">Pediatra – 17:00</p>
            </div>
            <div className="summary-item">
              <span className="summary-label">Tareas pendientes</span>
              <p className="summary-value">5 tareas por completar</p>
            </div>
            <div className="summary-item">
              <span className="summary-label">Notas recientes</span>
              <p className="summary-value">2 nuevas notas esta semana</p>
            </div>
          </div>
        </section>

        {/* CONTACTO – ID para "Contacto" */}
        <section className="contact" id="contacto">
          <h3 className="contact-title">Contacto</h3>
          <p className="contact-text">
            Muy pronto podrás escribirnos directamente desde aquí para resolver
            dudas, proponer ideas o pedir ayuda con tu organización familiar.
          </p>
        </section>

        {/* BOTÓN FLOTANTE (+) */}
        <button className="fab" aria-label="Crear nuevo">
          +
        </button>
      </main>

      <footer>
        <p>© 2025 FamZen · Todos los derechos reservados</p>
      </footer>
    </>
  );
}
