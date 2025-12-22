import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Login.css";

type Mode = "login" | "register";

export default function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState(""); // solo registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (mode === "register" && !name.trim()) return "Introduce tu nombre.";
    if (!email.trim()) return "Introduce tu correo.";
    if (!email.includes("@")) return "El correo no parece válido.";
    if (!password.trim()) return "Introduce tu contraseña.";
    if (password.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
    return null;
  };

  // ✅ Simulación (luego lo conectas a backend)
  const fakeAuth = async () => {
    await new Promise((r) => setTimeout(r, 350));

    if (mode === "login") {
      // credenciales demo
      if (email.toLowerCase() !== "demo@famzen.com" || password !== "123456") {
        throw new Error("Correo o contraseña incorrectos.");
      }
      return { name: "Demo", email };
    }

    // register OK
    return { name, email };
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const msg = validate();
    if (msg) return setError(msg);

    try {
      setLoading(true);
      const user = await fakeAuth();

      // ✅ session para tu Header
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userName", user.name);

      navigate("/"); // vuelve a Home
    } catch (err: any) {
      setError(err?.message || "Error al iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="auth-page">
        <section className="auth-card">
          <h2 className="auth-title">
            {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </h2>

          <p className="auth-subtitle">
            {mode === "login"
              ? "Accede con tu correo y contraseña."
              : "Regístrate para empezar con FamZen."}
          </p>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form" onSubmit={onSubmit}>
            {mode === "register" && (
              <label className="auth-field">
                <span>Nombre</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </label>
            )}

            <label className="auth-field">
              <span>Correo</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="tuemail@ejemplo.com"
                autoComplete="email"
              />
            </label>

            <label className="auth-field">
              <span>Contraseña</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
              />
            </label>

            <button className="auth-submit" disabled={loading}>
              {loading ? "Procesando..." : mode === "login" ? "Entrar" : "Crear cuenta"}
            </button>
          </form>

          <div className="auth-footer">
            {mode === "login" ? (
              <>
                <span>¿No tienes cuenta?</span>
                <button
                  type="button"
                  className="auth-link"
                  onClick={() => {
                    setError(null);
                    setMode("register");
                  }}
                >
                  Registrarse
                </button>
              </>
            ) : (
              <>
                <span>¿Ya tienes cuenta?</span>
                <button
                  type="button"
                  className="auth-link"
                  onClick={() => {
                    setError(null);
                    setMode("login");
                  }}
                >
                  Iniciar sesión
                </button>
              </>
            )}
          </div>

          <p className="auth-demo">
            Demo: <b>demo@famzen.com</b> / <b>123456</b>
          </p>
        </section>
      </main>
    </>
  );
}
