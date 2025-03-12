function Historial({ historial }) {
  return (
    <div>
      <h3>Últimos 5 países buscados</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {historial.map((pais, index) => (
          <li key={index} style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>
            {pais.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Historial;
