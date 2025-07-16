import React, { useState } from 'react';

function App() {
  const [pantalla, setPantalla] = useState('menu');
  const productosSeleccionados = 0;

  const comidas = [
    { nombre: "Napolita", descripcion: "Milanesa de ternera con salsa de tomate y queso muzzarela", precio: 11000 },
    { nombre: "Milanesa común", descripcion: "Clásica milanesa de ternera", precio: 9500 },
    { nombre: "Tostado común", descripcion: "Tradcional con manteca", precio: 8000 },
    { nombre: "Carlitos especial", descripcion: "Jamon, queso y aceitunas", precio: 14000 },
    { nombre: "Papas fritas", descripcion: "Porción de papas fritas", precio: 6000 },
    { nombre: "Papas con cheddar y panceta", descripcion: "Porción de papas con cheddar y panceta", precio: 8000 },
  ];
  const bebidas = [
    { nombre: "Fernet", descripcion: "Vaso fernet: fernet branca y gaseosa Coca Cola", precio: 6000 },
    { nombre: "Gin Tonic", descripcion: "Gin La Salvaje, Sprite y rodajas de limón", precio: 5000 },
    { nombre: "Agua mineral", descripcion: "Agua mineral", precio: 4000 },
    { nombre: "Agua gasificada", descripcion: "Agua con gas", precio: 4000 },
  ];

  // ----------------- COMPONENTES ---------------

  const Encabezado = () => (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: '#eee', height: 44, padding: '0 16px',
      position: 'sticky', top: 0, zIndex: 10,
      boxShadow: '0 2px 5px #0001',
      minWidth: 0
    }}>
      <span style={{ fontSize: 22, cursor: 'pointer' }}>☰</span>
      <span style={{
        fontSize: 22, background: '#fff', borderRadius: '50%',
        width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <span role="img" aria-label="user">👤</span>
      </span>
    </div>
  );

  const BarraInferior = () => (
    <div style={{
      position: 'fixed', bottom: 12, left: 0, width: '100%',
      display: 'flex', justifyContent: 'center', zIndex: 20
    }}>
      <div style={{
        background: '#d1d1d1', borderRadius: 14,
        width: '90vw', maxWidth: 370, minWidth: 210, height: 34,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 12px', fontSize: 15, boxShadow: '0 1px 6px #0002'
      }}>
        Productos
        <span style={{
          background: '#e5a843', color: '#fff', borderRadius: '50%',
          width: 22, height: 22, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontWeight: 'bold', marginLeft: 10
        }}>{productosSeleccionados}</span>
      </div>
    </div>
  );

  // Mobile-first: menos espacio, botones grandes
  const ProductoFila = ({ nombre, descripcion, precio }) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto auto auto',
      alignItems: 'center',
      gap: 7,
      borderBottom: '1px solid #f0f0f0',
      padding: '10px 0',
      fontSize: 14
    }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>{nombre}:</span>
        <span style={{ marginLeft: 5 }}>{descripcion}</span>
      </div>
      <div style={{ fontWeight: 'bold', fontSize: 15, minWidth: 60, textAlign: 'right' }}>
        ${precio}
      </div>
      <button
        style={{
          marginLeft: 4, width: 32, height: 32, borderRadius: '50%',
          border: 'none', background: '#e5a843', color: '#fff', fontSize: 18,
          fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.background = '#f3c96c'}
        onMouseOut={e => e.currentTarget.style.background = '#e5a843'}
      >+</button>
      <button
        style={{
          marginLeft: 3, width: 32, height: 32, borderRadius: '50%',
          border: 'none', background: '#e5a843', color: '#fff', fontSize: 18,
          fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.background = '#f3c96c'}
        onMouseOut={e => e.currentTarget.style.background = '#e5a843'}
      >–</button>
    </div>
  );

  // Márgenes chicos, botones grandes, uso de min/max width
  const PantallaMenu = () => (
    <div>
      <h1 style={{
        margin: '22px 0 22px 18px', fontWeight: 500,
        fontSize: 22, letterSpacing: 0.5
      }}>Menú</h1>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'center', marginTop: 14
      }}>
        <button
          style={{
            display: 'flex', alignItems: 'center', background: '#e5a843',
            border: 'none', borderRadius: 22, padding: '15px 0',
            width: '90vw', maxWidth: 350, minWidth: 200,
            boxShadow: '0 2px 8px #eee', cursor: 'pointer'
          }}
          onClick={() => setPantalla('comidas')}
        >
          <span style={{ fontSize: 44, marginRight: 12 }} role="img" aria-label="burger">🍔</span>
          <span style={{ fontSize: 18, fontWeight: 500 }}>Menú de comidas</span>
        </button>
        <button
          style={{
            display: 'flex', alignItems: 'center', background: '#e5a843',
            border: 'none', borderRadius: 22, padding: '15px 0',
            width: '90vw', maxWidth: 350, minWidth: 200,
            boxShadow: '0 2px 8px #eee', cursor: 'pointer'
          }}
          onClick={() => setPantalla('bebidas')}
        >
          <span style={{ fontSize: 44, marginRight: 12 }} role="img" aria-label="drink">🍸</span>
          <span style={{ fontSize: 18, fontWeight: 500 }}>Menú de bebidas</span>
        </button>
      </div>
    </div>
  );

  // Márgenes chicos, letra más chica, máximo ancho
  const PantallaComidas = () => (
    <div>
      <h1 style={{ margin: '18px 0 6px 18px', fontWeight: 500, fontSize: 20 }}>Menú de Comida</h1>
      <h3 style={{ margin: '10px 0 10px 18px', fontWeight: 400, fontSize: 16 }}>Minutas</h3>
      <div style={{ marginLeft: 12, marginRight: 12 }}>
        {comidas.map((comida, idx) => (
          <ProductoFila key={idx} {...comida} />
        ))}
      </div>
      <button
        style={{
          marginLeft: 16, marginTop: 14, padding: '9px 14px', borderRadius: 10,
          border: 'none', background: '#e5a843', color: '#fff', cursor: 'pointer', fontSize: 15
        }}
        onClick={() => setPantalla('menu')}
      >
        ← Volver al menú
      </button>
    </div>
  );

  const PantallaBebidas = () => (
    <div>
      <h1 style={{ margin: '18px 0 6px 18px', fontWeight: 500, fontSize: 20 }}>Menú de Bebidas</h1>
      <div style={{ marginLeft: 12, marginRight: 12 }}>
        {bebidas.map((bebida, idx) => (
          <ProductoFila key={idx} {...bebida} />
        ))}
      </div>
      <button
        style={{
          marginLeft: 16, marginTop: 14, padding: '9px 14px', borderRadius: 10,
          border: 'none', background: '#e5a843', color: '#fff', cursor: 'pointer', fontSize: 15
        }}
        onClick={() => setPantalla('menu')}
      >
        ← Volver al menú
      </button>
    </div>
  );

  // CONTENEDOR PRINCIPAL
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif', background: '#fff', minHeight: '100vh',
      margin: 0, maxWidth: 480, minWidth: 0, marginLeft: 'auto', marginRight: 'auto'
    }}>
      <Encabezado />
      {pantalla === 'menu' && <PantallaMenu />}
      {pantalla === 'comidas' && <PantallaComidas />}
      {pantalla === 'bebidas' && <PantallaBebidas />}
      <BarraInferior />
    </div>
  );
}

export default App;
