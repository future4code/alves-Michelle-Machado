import { Request, Response } from 'express'
import app from './app'
import connection from './connection';
import axios from 'axios'
import { BASE_URL } from './BASE_URL';

// Exercício 1

// a. Qual endpoint você deve utilizar para isso? https://labenews.herokuapp.com/subscribers
    
// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"? Com o async e o await

// c. Implemente uma FUNÇÃO NOMEADA que faça o que foi pedido.

async function getAllSubscribers(){
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data;
  };

// Exercício 2

// a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona

// Uma função nomeada assíncrona se escreve: async function getSubcribers(){}. Como qualquer função, sua resposta não será 
// retronada até que seja chamada, além de as functiOns terem uma denominação. 

// Já a arrow function assincrona se escreve assim: async (req:Request, res: Response) => {} não tem um nome, sendo executada
// assim que for lida pelo código.


// b. Implemente a função solicitada, USANDO ARROU FUNCTION

const getSubscribers2 = async () => {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data;
  };

// Exercicio 3

// a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers3 = async () => {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return Promise<user[]>;
  };

// Aparece que a function é uma promise. [Function: Promise]

// b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um Promise<any>. 
// Explique com as suas palavras o porquê de fazermos isso

// Assim podemos retornar propriedades especificas, como o id, name e email em vez 
// de apenas retornar todos os dados da Promise em um resolve

// c. Reimplemente a função, corretamente.

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
};

// Exercicio 4

  // a. Qual é o tipo dessa função? Por quê? Post . Pois está criando um novo conteudo para o banco de dados

  // b. Implemente a função solicitada

  async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.post(`${BASE_URL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }

// Exercicio 5

const sendNotifications1 = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${BASE_URL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };

  // Exercicio 6

// a. O que o Promise.all faz?

// O método Promise.all retorna uma unica Promise quando todas as outras promises forem resolvidas ou quando o argumento 
// não tem promise 

// b. Quais as vantagens de se utilizar o Promise.all no caso de se enviar as notificações para todos os usuários?

// Se você precisa realizar um grande numero de opoerações assíncronas, como enviar emails em massa para milhares de usuarios,
// vai preciasr usar o Promise.alll, pois de outro modo o JavaScript acabará encerrando o servidor por conta da alto número
// de conexões HTTP abertas.

// c. Reimplemente a função utilizando Promise.all

const sendNotifications2 = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${BASE_URL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };