interface Cachorro {
    nome: string;
    idade: number;
    parqueFAvorito?: string;
}
type CachorroSomenteLEitura{
    readonly [ K in keyof Cachorro]: Cachorro[K];
}

class MeuCachorro implements Cachorro {
    idade;
    nome;
    parqueFAvorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);




/* interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}


function redirecione (usuario: IUsuario ){
    if (usuario.cargo) {
        //redirecionar(usuario.cargo);
    }

    //redirecionar para a área do uruário
} */