import React, { useState } from 'react';

function App() {
  // Estado para la pantalla activa: 'menu', 'comidas', 'bebidas'
  const [pantalla, setPantalla] = useState('menu');
  const productosSeleccionados = 1; // Ficticio, se puede cambiar después

  // Ejemplo simple de comidas y bebidas
  const comidas = [
    { nombre: "Napolita", descripcion: "Milanesa de ternera con salsa de tomate y queso muzzarela", precio: 11000 },
    { nombre: "Milanesa común", descripcion: "Clásica milanesa de ternera", precio: 9500 }
  ];
  const bebidas = [
    { nombre: "Fernet", descripcion: "Vaso fernet: fernet branca y gaseosa Cocacola Company", precio: 6000 },
    { nombre: "Gin Tonic", descripcion: "Gin La Salvaje, Sprite y rodajas de limón", precio: 5000 },
    { nombre: "Agua mineral", descripcion: "Agua mineral", precio: 4000 },
    { nombre: "Agua gasificada", descripcion: "Agua con gas", precio: 4000 }
  ];

  // Encabezado, siempre igual
  const Encabezado = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#eee', height: 50, padding: '0 20px' }}>
      <span style={{ fontSize: 24, cursor: 'pointer' }}>☰</span>
      <span style={{ fontSize: 24, background: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span role="img" aria-label="user">👤</span>
      </span>
    </div>
  );

  // Barra inferior fija, siempre igual
  const BarraInferior = () => (
    <div style={{
      position: 'fixed',
      bottom: 30,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        background: '#d1d1d1',
        borderRadius: 16,
        width: 320,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 18px',
        fontSize: 15
      }}>
        Productos seleccionados
        <span style={{
          background: '#e5a843',
          color: '#fff',
          borderRadius: '50%',
          width: 22,
          height: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          marginLeft: 10
        }}>{productosSeleccionados}</span>
      </div>
    </div>
  );

  // Pantalla principal (menú)
  const PantallaMenu = () => (
    <div>
      <h1 style={{ margin: '30px 0 30px 40px', fontWeight: 400 }}>Menu</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center', marginTop: 20 }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#e5a843',
            border: 'none',
            borderRadius: 24,
            padding: '20px 40px',
            minWidth: 300,
            boxShadow: '0 2px 8px #eee',
            cursor: 'pointer'
          }}
          onClick={() => setPantalla('comidas')}
        >
          <span style={{ fontSize: 50, marginRight: 20 }} role="img" aria-label="burger">🍔</span>
          <span style={{ fontSize: 20, fontWeight: 500 }}>Menu de comidas</span>
        </button>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#e5a843',
            border: 'none',
            borderRadius: 24,
            padding: '20px 40px',
            minWidth: 300,
            boxShadow: '0 2px 8px #eee',
            cursor: 'pointer'
          }}
          onClick={() => setPantalla('bebidas')}
        >
          <span style={{ fontSize: 50, marginRight: 20 }} role="img" aria-label="drink">🍸</span>
          <span style={{ fontSize: 20, fontWeight: 500 }}>Menu de bebidas</span>
        </button>
      </div>
    </div>
  );

  // Pantalla de comidas
  const PantallaComidas = () => (
    <div>
      <h1 style={{ margin: '30px 0 10px 40px', fontWeight: 400 }}>Menu de Comida</h1>
      <h3 style={{ margin: '20px 0 20px 40px', fontWeight: 400 }}>Minutas</h3>
      <div style={{ marginLeft: 40 }}>
        {comidas.map((comida, idx) => (
          <div key={idx} style={{ marginBottom: 24 }}>
            <span style={{ fontWeight: 'bold' }}>{comida.nombre}: </span>
            <span>{comida.descripcion}</span>
            <span style={{ float: 'right', marginRight: 50, fontWeight: 'bold' }}>${comida.precio}</span>
          </div>
        ))}
      </div>
      <button
        style={{ marginLeft: 40, marginTop: 20, padding: '10px 20px', borderRadius: 12, border: 'none', background: '#e5a843', color: '#fff', cursor: 'pointer' }}
        onClick={() => setPantalla('menu')}
      >
        ← Volver al menú
      </button>
    </div>
  );

  // Pantalla de bebidas
  const PantallaBebidas = () => (
    <div>
      <h1 style={{ margin: '30px 0 10px 40px', fontWeight: 400 }}>Menu de Bebidas</h1>
      <h3 style={{ margin: '20px 0 10px 40px', fontWeight: 400 }}>Bebidas alcohólicas</h3>
      <div style={{ marginLeft: 40 }}>
        {bebidas.filter(b => b.nombre !== "Agua mineral" && b.nombre !== "Agua gasificada").map((bebida, idx) => (
          <div key={idx} style={{ marginBottom: 18 }}>
            <span style={{ fontWeight: 'bold' }}>{bebida.nombre}: </span>
            <span>{bebida.descripcion}</span>
            <span style={{ float: 'right', marginRight: 50, fontWeight: 'bold' }}>${bebida.precio}</span>
          </div>
        ))}
      </div>
      <h3 style={{ margin: '20px 0 10px 40px', fontWeight: 400 }}>Bebidas sin alcohol</h3>
      <div style={{ marginLeft: 40 }}>
        {bebidas.filter(b => b.nombre === "Agua mineral" || b.nombre === "Agua gasificada").map((bebida, idx) => (
          <div key={idx} style={{ marginBottom: 18 }}>
            <span style={{ fontWeight: 'bold' }}>{bebida.nombre}: </span>
            <span>{bebida.descripcion}</span>
            <span style={{ float: 'right', marginRight: 50, fontWeight: 'bold' }}>${bebida.precio}</span>
          </div>
        ))}
      </div>
      <button
        style={{ marginLeft: 40, marginTop: 20, padding: '10px 20px', borderRadius: 12, border: 'none', background: '#e5a843', color: '#fff', cursor: 'pointer' }}
        onClick={() => setPantalla('menu')}
      >
        ← Volver al menú
      </button>
    </div>
  );

  // Renderizado principal
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fff', minHeight: '100vh', margin: 0 }}>
      <Encabezado />
      {pantalla === 'menu' && <PantallaMenu />}
      {pantalla === 'comidas' && <PantallaComidas />}
      {pantalla === 'bebidas' && <PantallaBebidas />}
      <BarraInferior />
    </div>
  );
}

export default App;
