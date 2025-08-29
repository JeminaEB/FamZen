import React from "react";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-200 to-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700">
        Bienvenido a Padres Sin Caos 🚀
      </h1>
      <p className="text-lg mb-6">Tu espacio sin estrés ✨</p>

      <div className="flex gap-4">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-2xl shadow-md hover:bg-indigo-700 transition">
          Explorar
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-2xl shadow-md hover:bg-gray-300 transition">
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Home;
