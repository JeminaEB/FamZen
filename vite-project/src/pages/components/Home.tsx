import React, { useState } from "react";
import Header from "./Header"; // 👈 Importa el nuevo header
import "./Home.css";

export default function Home() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

  const sections = [
    {
      title: "Calendario Familiar",
      description: "Sincroniza horarios de todos y recibe recordatorios automáticos.",
      className: "pink"
    },
    {
      title: "Asistente de Tareas",
      description: "Lista compartida con asignaciones automáticas según el tiempo disponible.",
      className: "yellow"
    },
    {
      title: "Tiempo Personal",
      description: "Encuentra huecos libres y bloquea momentos de respiro.",
      className: "green"
    },
    {
      title: "Notas y Documentos",
      description: "Guarda recetas, listas de compras y autorizaciones en un solo lugar.",
      className: "blue"
    }
  ];

  return (
    <div className="page">
      {/* Header separado */}
      <Header />

      {/* Main */}
      <main>
        <h2>Tu asistente inteligente para familias ✨</h2>
        <div className="sections">
          {sections.map((sec) => (
            <div
              key={sec.title}
              className={`card ${sec.className}`}
              onClick={() => toggle(sec.title)}
            >
              <h3>{sec.title}</h3>
              {open === sec.title && <p>{sec.description}</p>}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Padres Sin Caos · Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
