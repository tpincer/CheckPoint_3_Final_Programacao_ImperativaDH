class Aluno {
    listaPessoas = [];

    adicionarPessoa(nome, idade, notas) {
        this.listaPessoas.push({
            nome: nome,
            idade: idade,
            notas: notas,
            media: 0,
            faltas: 0
        });
    }
    
    calcularMedia() {
        let total;

        this.listaPessoas.forEach(pessoa => {
            total = 0;

            pessoa.notas.forEach(valor => {
                total += valor;
            });

            // console.log(total/pessoa.notas.length); exibir a média

            pessoa.media = total/pessoa.notas.length;

        });
    }

    aumentarFaltas(indice) {
        this.listaPessoas[indice].faltas++;
    }

}

module.exports = Aluno;