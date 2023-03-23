function palindrome(str) {
    // Verificar si el string original es un palíndromo
    if (str === str.split("").reverse().join("")) {
      return str;
    }
  
    // Verificar si se puede obtener un palíndromo quitando un solo caracter
    for (let i = 0; i < str.length; i++) {
      let temp = str.slice(0, i) + str.slice(i+1);
      if (temp === temp.split("").reverse().join("")) {
        return str[i];
      }
    }
  
    // Verificar si se puede obtener un palíndromo quitando dos caracteres
    for (let i = 0; i < str.length-1; i++) {
      for (let j = i+1; j < str.length; j++) {
        let temp = str.slice(0, i) + str.slice(i+1, j) + str.slice(j+1);
        if (temp === temp.split("").reverse().join("")) {
          return str[i] + str[j];
        }
      }
    }
  
    // Si no se cumple ninguna de las condiciones anteriores, retornar "not possible"
    return "not possible";
  }

  
  console.log(palindrome('mmonm'))