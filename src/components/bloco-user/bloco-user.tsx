import { useState } from "react";
import "./bloco-user.css";
import { Modal } from "../window_modal/modal";

export function BlockUser() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="infor-user">
        <div className="infor">
          <h3>Nome</h3>
          <p>Valor</p>
        </div>
        <div className="buttons">
          <button className="btn-edit" onClick={() => setOpenModal(true)}>
            Editar
          </button>
          <button className="btn-del">Quitar</button>
        </div>
      </div>
      <Modal isOpen={openModal}>
        <div className="divida-content">
          <h1>Valor</h1>
          <div className="divida-values">
            <label htmlFor="novo-valor">Digite o novo valor:</label>
            <input type="number" name="novo-valor" id="novo-valor" />
          </div>
          <button className="btn-save">Salvar</button>
        </div>
      </Modal>
    </>
  );
}
