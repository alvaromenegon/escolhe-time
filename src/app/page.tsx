'use client'
import { useState } from "react"

export default function Home() {
  const [colaboradores, setColaboradores] = useState([] as string[]);
  const [tarefa, setTarefa] = useState("");
  const [selected, setSelected] = useState([] as string[]);

  const perfilColaboradores = [
    'Comunicador',
    'Planejador',
    'Executor',
    'Analista'
  ];

  const tarefasPossiveis = [
    'Montar um time de engenheiros para o novo arranha-céu',
    'Montar uma equipe para analisar o balanço financeiro da empresa',
    'Montar um time para criar a nova identidade visual da empresa',
    'Escolher os professores para elaborar a nova grade curricular',
    'Selecionar os engenheiros para a construção da nova ponte',
    'Montar uma comissão para elaborar o novo projeto de lei',
    'Escolher membros do novo Centro Acadêmico',
    'Organizar a equipe de vendas para o novo produto',
    'Escolher os colaboradores que farão parte do SIPAT',
    'Selecionar os membros da comissão de ética',
    'Montar uma bancada julgadora para o concurso de redação',
    'Montar uma bancada julgadora para o concurso de artes',
    'Montar uma bancada julgadora para o concurso de ciências',
    'Escolher os responsáveis por uma missão crítica da empresa',
  ];

  const gerarTime = () => {
    var qtdC = 0;
    var qtdP = 0;
    var qtdE = 0;
    var qtdA = 0;

    var colaboradores = []
    for (let i = 0; i < 7; i++) {
      while (true) {
        var profile = perfilColaboradores[Math.floor(Math.random() * perfilColaboradores.length)]
        if ((profile === 'Comunicador' && qtdC < 3) ||
          (profile === 'Planejador' && qtdP < 3) ||
          (profile === 'Executor' && qtdE < 3) ||
          (profile === 'Analista' && qtdA < 3)) {
          switch (profile) {
            case 'Comunicador':
              qtdC++
              break;
            case 'Planejador':
              qtdP++
              break;
            case 'Executor':
              qtdE++
              break;
            case 'Analista':
              qtdA++
              break;
          }
          colaboradores.push(profile);
          break;
        }
      }
    }
    return colaboradores;
  }

  const gerarTarefa = () => {
    return tarefasPossiveis[Math.floor(Math.random() * tarefasPossiveis.length)]
  }

  const handleChanges = (el: any) => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length > 5) {
      el.target.checked = false;
      return;
    }
    var values = [];
    for (var i = 0; i < checkboxes.length; i++) {
      let id = parseInt(checkboxes[i].id);
      if (!isNaN(id)) {
        values.push(colaboradores[id]);
      }
    }
    setSelected(values);
  }

  const exec = () => {
    setSelected([]);
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((el) => {
      (el as HTMLInputElement).checked = false;
    });
    setColaboradores(gerarTime());
    setTarefa(gerarTarefa());
    const element = document.getElementById("enable");
    if (element) {
      element.style.display = "block";
    }
  }

  return (
    <>
      <div className="container flex-shrink-0">
        <div className="text-center">
          <h1>Monte seu Time</h1>
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary" id="btn" onClick={exec}>
              Gerar Time e Tarefa
            </button>
          </div>
          <main>
            <div className="mt-3">
              <p className="h2">Perfis Disponíveis:</p>
              <ul id="colaboradores" className="list-group mb-3">
                {colaboradores.map((colaborador, index) => (
                  <li className="list-group-item" key={index}>
                    <input type="checkbox" id={`${index}`} className="form-check-input me-1" onChange={handleChanges} />
                    <label htmlFor={`${index}`}>{colaborador}</label>
                  </li>
                ))}
              </ul>

              <p>
                <b>Tarefa a ser cumprida:</b> {tarefa}
              </p>
            </div>
            <div id="enable" className="mt-3" style={{ display: "none" }}>
              <p className="h2">Time:</p>
              <ul className="list-group mb-3">
                {selected.length > 0 &&
                  selected.map((colaborador, index) => (
                    <li className="list-group-item d-flex align-items-center" key={index}>
                      {colaborador}
                    </li>
                  ))
                }
                {selected.length < 5 &&
                  <li className="list-group-item text-danger">Selecione mais {5 - selected.length} 
                  {
                    selected.length === 4 ? ' perfil' : ' perfis'
                  }</li>
                }
              </ul>

            </div>
          </main>

        </div>
      </div>
      <footer className="footer mt-auto py-3 text-body-secondary bg-body-tertiary">
        <div className="container">
          <p> &copy; 2023 - Álvaro Eduardo Menegon Rosario</p>
        </div>
      </footer>
    </>
  )
}

