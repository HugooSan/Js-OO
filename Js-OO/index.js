import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"


const diretor = new Diretor("Hugo", 1000000000, 23666999874);
const gerente = new Gerente("dhuewq", 13215496, 1234987998);

diretor.cadastrarSenha(123456789);
gerente.cadastrarSenha(456321);

const estalogado = SistemaAutenticacao.login(diretor, 123456789);
console.log(estalogado);