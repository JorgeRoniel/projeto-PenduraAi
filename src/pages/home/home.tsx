import { useState } from "react";
import { Modal } from "../../components/window_modal/modal";
import "./home.css";
import { BlockUser } from "../../components/bloco-user/bloco-user";

export function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<Dados[]>(() => {
    const dadosSalvos = localStorage.getItem("dados");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  interface Dados {
    nome: string;
    valor: string;
  }
  let dados: Dados[] = [];
  function handleSave() {
    const nomes = document.getElementById("nome") as HTMLInputElement;
    const valor = document.getElementById("valor") as HTMLInputElement;
    const dado: Dados = {
      nome: nomes.value,
      valor: valor.value,
    };
    if (localStorage.dados) {
      dados = JSON.parse(localStorage.dados);
      dados.push(dado);
      localStorage.dados = JSON.stringify(dados);
      setData(JSON.parse(localStorage.dados));
      alert("Salvo com Sucesso!");
      setOpenModal(false);
    } else {
      dados.push(dado);
      localStorage.dados = JSON.stringify(dados);
      setData(JSON.parse(localStorage.dados));
      alert("Salvo com Sucesso!");
      setOpenModal(false);
    }
  }
  return (
    <>
      <div className="container">
        <div className="pesquisa-div">
          <h1 className="title-h1">Olá, seja bem vindo!</h1>
          <h2 className="title-h2">consulte a dívida dos seus clientes!</h2>
          <div className="input-div">
            <input
              type="text"
              name=""
              id="pesquisa"
              placeholder="Pesquise aqui..."
            />
            <button>Pesquisar</button>
          </div>

          <div className="scrool-area">
            <div className="clients-list">
              {data.map((item, index) => (
                <BlockUser nome={item.nome} valor={item.valor} index={index} />
              ))}
            </div>
          </div>
        </div>
        <button className="btn-add" onClick={() => setOpenModal(true)}>
          +
        </button>
        <Modal isOpen={openModal}>
          <div className="form-divida">
            <button className="close-btn" onClick={() => setOpenModal(false)}>
              {" "}
              X{" "}
            </button>
            <h1 className="title-h1">Cadastro de Cliente</h1>
            <div>
              <form action="">
                <label className="label" htmlFor="nome">
                  Nome:
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
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
              <button type="submit" className="btn-form" onClick={handleSave}>
                Salvar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
