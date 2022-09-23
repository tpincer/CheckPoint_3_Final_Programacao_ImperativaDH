//const aluno = require("../checkpoint3/aluno");
//const listaPessoas = require("./estudantes");
const estudantes = require("./estudantes");

class Curso {
  tema = "Cervejeiro";
  minimo = 7;
  faltasMaxima = 2;
  listaParticipantes = [];

  constructor(lista) {
    this.listaParticipantes = lista;
  }

  adicionarParticipante(nome, idade, notas) {n
    this.listaParticipantes.push({
      nome: nome,
      idade: idade,
      notas: notas,
      media: 0,
      faltas: 0,
    });
  }

  aprovacao(indice) {
    const participante = this.listaParticipantes[indice];

    if (
      participante.media >= this.minimo &&
      participante.faltas < this.faltasMaxima
    ) {
      return `O Aluno ${participante.nome} teve a média ${participante.media}, a quantidade de falta ${participante.faltas}, onde foi APROVADO no curso de ${this.tema} .` ;
    } else if (
      participante.media >= this.minimo * 1.1 &&
      participante.faltas === this.faltasMaxima
    ) {
      return `O Aluno ${participante.nome} teve a média ${participante.media}, a quantidade de faltas ${participante.faltas}, onde foi APROVADO COM RESSALVAS no curso de ${this.tema}.`;
    } else {
      return `O Aluno ${participante.nome} teve a média ${participante.media}, a quantidade de faltas ${participante.faltas}, onde foi REPROVADO no curso de ${this.tema}.`;
    }
  }
}


const participante = new Curso(estudantes);

console.log('*****Boletim de Notas/Faltas dos Alunos*****');
console.log(participante.aprovacao(0));
console.log(participante.aprovacao(1));
console.log(participante.aprovacao(2));
console.log(participante.aprovacao(3));
console.log(participante.aprovacao(4));
//console.log(participante.aprovacao());

