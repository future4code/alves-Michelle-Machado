```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

    let salarioFinal = undefined

    for (let i = 0; i <= qtdeCarrosVendidos; i++) {
        if (i == qtdeCarrosVendidos) {
            salarioFinal = 2000 + (i*100) + ((valorTotalVendas * 5) / 100)
            
            return salarioFinal

        } else {

            continue;
        }

    }

}

```