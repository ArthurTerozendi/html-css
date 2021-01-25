melhorEstudante({
    Joao: [9, 9.6, 9.9, 9],
    Mariana: [9, 9, 7.9, 8],
    Carla: [7, 7, 8, 9]
})
function melhorEstudante(alunos) {
    let medias = [];
    let alunosArray = []
    let i = 0;
    Object.keys(alunos).forEach(aluno => {
        medias[i] = alunos[aluno].reduce(
            (total, valorAtual) => total + valorAtual
        );
        medias[i] /= alunos[aluno].length;
        alunosArray[i] = aluno;
        i++;
    })

    let maiorMediaIndex
    for (let i = 0; i < medias.length; i++) {
        if (i == 0) {
            maiorMediaIndex = i;
        }
        else {
            if (medias[i] >= medias[maiorMediaIndex]) {
                maiorMediaIndex = i;
            }
        }
    }
    window.alert(`Nome: ${alunosArray[maiorMediaIndex]}, media: ${medias[maiorMediaIndex]}`);
}