import { useState } from "react";
import "./bloco-user.css";
import { Modal } from "../window_modal/modal";

interface UserProps {
  nome: string;
  valor: string;
  index: number;
}

export function BlockUser({ nome, valor, index }: UserProps) {
  const [openModal, setOpenModal] = useState(false);

  function changeDivida() {
    const listaDados = localStorage.getItem("dados");
    const dados = listaDados ? JSON.parse(listaDados) : [];

    for (let i = 0; i < dados.length; i++) {
      if (dados[i] === dados[index]) {
        const valor = document.getElementById("novo-valor") as HTMLInputElement;
        dados[i].valor = valor.value;
        localStorage.dados = JSON.stringify(dados);
        document.location.reload();
      }
    }
  }

  function handleDelete() {
    const listaDados = localStorage.getItem("dados");
    const dados = listaDados ? JSON.parse(listaDados) : [];

    for (let i = 0; i < dados.length; i++) {
      if (dados[i].nome === dados[index].nome) {
        dados.splice(index, 1);
        localStorage.dados = JSON.stringify(dados);
        alert("Dívida Quitada!");
        document.location.reload();
      }
    }
  }
  return (
    <>
      <div className="infor-user">
        <div className="infor">
          <h3>{nome}</h3>
          <p>R${valor}</p>
        </div>
        <div className="buttons">
          <button className="btn-edit" onClick={() => setOpenModal(true)}>
            Editar
          </button>
          <button className="btn-del" onClick={handleDelete}>
            Quitar
          </button>
        </div>
      </div>
      <Modal isOpen={openModal}>
        <div className="divida-content">
          <button id="btn-close" onClick={() => setOpenModal(false)}>
            X
          </button>
          <h1>Valor: R${valor}</h1>
          <div className="divida-values">
            <label htmlFor="novo-valor" id="label">
              Digite o novo valor:
            </label>
            <input type="number" name="novo-valor" id="novo-valor" />
          </div>
          <button className="btn-save" onClick={changeDivida}>
            Salvar
          </button>
        </div>
      </Modal>
    </>
  );
}
