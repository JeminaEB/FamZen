import * as React from "react";
import * as Home from "./pages/Home";  // 👈 importa el componente

function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Home /> {/* 👈 aquí mostramos Home */}
    </div>
  )
}

export default App;
