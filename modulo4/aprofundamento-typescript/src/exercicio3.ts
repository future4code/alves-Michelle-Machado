// EXERCICIO 3

type posts = {
    autor: string,
    texto: string,
};

const arrayPosts: posts[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]


function buscarPostsPorAutor(arrayPosts: posts[], autorInformado: string) {

    return arrayPosts.filter((post) => {
        return post.autor === autorInformado
      }
    )
  }

console.log(buscarPostsPorAutor(arrayPosts, "Lord Voldemort" ))


// a) Copie o código acima para um arquivo .ts depois:
// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

// b) Quais são as entradas e saídas dessa função? 
// Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária. 
// A entrada é o array de posts e o nome do autor do post. A saida é o post com o autor escolhido

