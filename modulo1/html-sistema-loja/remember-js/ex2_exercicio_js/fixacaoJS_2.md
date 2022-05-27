```
function calculaPrecoTotal(quantidade) {
  
  for(let i = 0; i < quantidade; i++){
    if(quantidade < 12){
      return quantidade * 1.30
    }else{
      return quantidade * 1
    }
  }
}

```