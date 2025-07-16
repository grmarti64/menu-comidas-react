import React, { useState } from 'react';

function App() {
  const [pantalla, setPantalla] = useState('menu');
  const productosSeleccionados = 0; // Este valor debería ser dinámico si se implementa la lógica de selección de productos

  const comidas = [
    { nombre: "Napolita", descripcion: "Milanesa de ternera con salsa de tomate y queso muzzarela", precio: 11000 },
    { nombre: "Milanesa común", descripcion: "Clásica milanesa de ternera", precio: 9500 },
    { nombre: "Tostado común", descripcion: "Tradcional con manteca", precio: 8000 },
    { nombre: "Carlitos especial", descripcion: "Jamon, queso y aceitunas", precio: 14000 },
    { nombre: "Papas fritas", descripcion: "Porción de papas fritas", precio: 6000 },
    { nombre: "Papas con cheddar y panceta", descripcion: "Porción de papas con cheddar y panceta", precio: 8000 },
    //{ nombre: "Papas con huevo y queso", descripcion: "Porción de papas con huevo y queso", precio: 8000 },
    //{ nombre: "Papas con huevo y panceta", descripcion: "Porción de papas con huevo y panceta", precio: 12000 },

    ];
  const bebidas = [
    { nombre: "Fernet", descripcion: "Vaso fernet: fernet branca y gaseosa Coca Cola", precio: 6000 },
    { nombre: "Gin Tonic", descripcion: "Gin La Salvaje, Sprite y rodajas de limón", precio: 5000 },
    { nombre: "Agua mineral", descripcion: "Agua mineral", precio: 4000 },
    { nombre: "Agua gasificada", descripcion: "Agua con gas", precio: 4000 },
  ];

  const Encabezado = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#eee', height: 50, padding: '0 20px' }}>
      <span style={{ fontSize: 24, cursor: 'pointer' }}>☰</span>
      <span style={{ fontSize: 24, background: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span role="img" aria-label="user">👤</span>
      </span>
    </div>
  );

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

  // Ahora el botón menos está SIEMPRE, tanto en comidas como en bebidas
  const ProductoFila = ({ nombre, descripcion, precio }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr auto auto auto',
    alignItems: 'center',
    gap: 10,
    borderBottom: '1px solid #f0f0f0',
    padding: '12px 0'
  }}>
    <div>
      <span style={{ fontWeight: 'bold' }}>{nombre}:</span>
      <span style={{ marginLeft: 6 }}>{descripcion}</span>
    </div>
    <div style={{ fontWeight: 'bold', fontSize: 16, minWidth: 70, textAlign: 'right' }}>
      ${precio}
    </div>
    {/* Botón + */}
    <button
      style={{
        marginLeft: 10,
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: 'none',
        background: '#e5a843',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background 0.2s'
      }}
      onMouseOver={e => e.currentTarget.style.background = '#f3c96c'}
      onMouseOut={e => e.currentTarget.style.background = '#e5a843'}
    >+</button>
    {/* Botón - */}
    <button
      style={{
        marginLeft: 4,
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: 'none',
        background: '#e5a843',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background 0.2s'
      }}
      onMouseOver={e => e.currentTarget.style.background = '#f3c96c'}
      onMouseOut={e => e.currentTarget.style.background = '#e5a843'}
    >–</button>
  </div>
);



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

  const PantallaComidas = () => (
    <div>
      <h1 style={{ margin: '30px 0 10px 40px', fontWeight: 400 }}>Menu de Comida</h1>
      <h3 style={{ margin: '20px 0 20px 40px', fontWeight: 400 }}>Minutas</h3>
      <div style={{ marginLeft: 40, marginRight: 40 }}>
        {comidas.map((comida, idx) => (
          <ProductoFila key={idx} {...comida} />
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

  const PantallaBebidas = () => (
    <div>
      <h1 style={{ margin: '30px 0 10px 40px', fontWeight: 400 }}>Menu de Bebidas</h1>
      <div style={{ marginLeft: 40, marginRight: 40 }}>
        {bebidas.map((bebida, idx) => (
          <ProductoFila key={idx} {...bebida} />
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
