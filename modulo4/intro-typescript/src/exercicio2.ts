// EXERCICIO 2
const prompts = require('prompts');

const question1 = [
    {
        type: 'text',
        message: "Insira sua primeira cor favorita"
    },
];

const question2 = [
    {
        type: 'text',
        message: "Insira sua segunda cor favorita"
    },
];

const question3 = [
    {
        type: 'text',
        message: "Insira sua terceira cor favorita"
    }
];
    
(async () => {
    const response1 = await prompts(question1);
    const response2 = await prompts(question2);
    const response3 = await prompts(question3);
    console.log([response1, response2, response3])
  })();



