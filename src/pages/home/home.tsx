import { useState } from "react";
import { Modal } from "../../components/window_modal/modal";
import "./home.css";

export function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="container">
        <h1 className="title-h1">Olá, seja bem vindo!</h1>

        <input
          type="text"
          name=""
          id="pesquisa"
          placeholder="Pesquise aqui..."
        />

        <h2 className="title-h2">consulte a dívida dos seus clientes!</h2>
        <button className="btn-add" onClick={() => setOpenModal(true)}>
          +
        </button>
        <Modal isOpen={openModal}>
          <div className="form-divida">
            <h1 className="title-h1">Cadastro de Cliente</h1>
            <button className="close-btn" onClick={() => setOpenModal(false)}>
              {" "}
              X{" "}
            </button>
            <div>
              <form action="">
                <label className="label" htmlFor="nome">
                  Nome:
                </label>
                <input
                  type="text"
                  name="nome"
                  id="valor"
                  className="input-form-divida"
                />
                <label className="label" htmlFor="valor">
                  Valor:
                </label>
                <input
                  type="number"
                  name="valor"
                  id="valor"
                  className="input-form-divida"
                />
              </form>
              <button type="submit" className="btn-form">
                Salvar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
