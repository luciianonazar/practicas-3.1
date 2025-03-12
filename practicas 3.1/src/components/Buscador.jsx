function Buscador({ setBusqueda }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Escribe un país..."
        style={{ padding: "10px", width: "200px" }}
      />
    </div>
  );
}

export default Buscador;
