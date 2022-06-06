
```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

    let count = 0

    for (let numero of arrayDeNumeros) {

        if (numero == numeroEscolhido) {
            count = count + 1
        } 

        else{
            continue
        }
    }

    if(count >= 1){
        return `O número ${numeroEscolhido} aparece ${count}x`
    }
    
    else{
        return "Número não encontrado"
    }

}

```

