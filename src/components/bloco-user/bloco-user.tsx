import "./bloco-user.css";

export function BlockUser() {
  return (
    <div className="infor-user">
      <h3>Nome</h3>
      <p>Valor</p>
      <div className="buttons">
        <button className="btn-edit">Editar</button>
        <button className="btn-del">Quitar</button>
      </div>
    </div>
  );
}
