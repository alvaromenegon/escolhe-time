function gerarColaboradores() {
    document.getElementById('colaboradores').innerHTML = ''
    const perfilColaboradores = [
        'Comunicador',
        'Planejador',
        'Executor',
        'Analista'
    ]
    var qtdC = 0;
    var qtdP = 0;
    var qtdE = 0;
    var qtdA = 0;

    var colaboradores = []
    for (let i = 0; i < 8; i++) {
        while (true) {
            var profile = perfilColaboradores[Math.floor(Math.random() * perfilColaboradores.length)]
            if ((profile === 'Comunicador' && qtdC < 2) || 
                (profile === 'Planejador' && qtdP < 2) || 
                (profile === 'Executor' && qtdE < 2) || 
                (profile === 'Analista' && qtdA < 2)) {
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
    colaboradores.forEach(colaborador => {
        document.getElementById('colaboradores').innerHTML += `
            <li class="list-group-item">
                <span>${colaborador}</span>
            </li>
        `
    })
}

function gerarTarefas(){
    const tarefas = [
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
    ]
    const tarefa = tarefas[Math.floor(Math.random() * tarefas.length)];
    document.getElementById('tarefa').innerHTML = tarefa;
}

function main(){
    document.getElementById('btn').setAttribute('disabled', true);
    gerarColaboradores();
    gerarTarefas();
    document.getElementById('time').style.display = 'block';
}