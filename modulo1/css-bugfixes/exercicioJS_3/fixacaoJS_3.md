
```
function calculaNota(ex, p1, p2) {

  let media = ((ex * 1) + (p1 * 2) + (p2 * 3)) / (1 + 2 + 3)

  if (media >= 9) {
    return media = "A"
  }

  else if (media < 9 && media >= 7.5) {
    return media = "B"
  }

  else if (media < 7.5 && media >= 6) {
    return media = "C"
  }

  else {
    return media = "D"
  }

}

```