function TarjetaPais({ pais }) {
    return (
      <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px", display: "inline-block" }}>
        <h2>{pais.name.common}</h2>
        <p><strong>Capital:</strong> {pais.capital?.[0]}</p>
        <p><strong>Población:</strong> {pais.population.toLocaleString()}</p>
        <img src={pais.flags.svg} alt={`Bandera de ${pais.name.common}`} width="100" />
      </div>
    );
  }
  
  export default TarjetaPais;
  