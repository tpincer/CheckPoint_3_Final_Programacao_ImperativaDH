const Aluno = require('./aluno');

const estudante = new Aluno();

estudante.adicionarPessoa('Alexandre', 50, [10, 5, 9]);
estudante.adicionarPessoa('Paulo', 38, [3, 3, 6]);
estudante.adicionarPessoa('Antonio', 62, [10, 10, 10]);
estudante.adicionarPessoa('André', 21, [10, 10, 10]);
estudante.adicionarPessoa('Carlos', 35, [7, 8, 9]);


estudante.calcularMedia();

estudante.aumentarFaltas(0);
estudante.aumentarFaltas(0);
estudante.aumentarFaltas(2);
estudante.aumentarFaltas(4);
estudante.aumentarFaltas(4);
estudante.aumentarFaltas(4);

module.exports = estudante.listaPessoas;